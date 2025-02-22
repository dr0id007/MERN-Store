const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { authenticateToken: auth } = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		if (!user) {
			res.send('User not found')
		}
		res.json(user)
	} catch (err) {
		console.error('error', err.message)
		res.status(500).send('Server Error')
	}
})

router.post(
	'/login',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists()
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const { email, password } = req.body
		try {
			let user = await User.findOne({ email })
			if (!user) {
				return res.status(400).json({ msg: 'Invalid Credentials' })
			}
			const isMatch = await bcrypt.compare(password, user.password)
			if (!isMatch) {
				return res.status(400).json({ msg: 'Invalid Credentials' })
			}
			// if (!user.isVerified) {
			// 	return res.status(401).json({ type: 'not-verified', msg: 'Your account has not been verified.' });
			// }
			const payload = {
				user: {
					id: user.id
				}
			}

			jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
				if (err) throw err
				res.json({ token })
			})
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	}
)

module.exports = router
