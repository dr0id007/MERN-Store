const jwt = require('jsonwebtoken')
const config = require('config')

const authenticateToken = (req, res, next) => {
	// Get token from header
	const token = req.header('auth-token')

	// Check if token available
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' })
	}

	// Verify token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded.user
		next()
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' })
	}
}

const generateToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '60s' })
}

module.exports = { authenticateToken, generateToken }
