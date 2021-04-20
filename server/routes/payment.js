const express = require('express')
const router = express.Router()
const Razorpay = require('razorpay')
const crypto = require('crypto')
const { body, validationResult } = require('express-validator')

const Transaction = require('../models/Transaction')

router.post(
	'/order',
	[
		body('amount', 'amount is required').not().isEmpty(),
		body('currency', 'currency is required').not().isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		try {
			const { amount, currency } = req.body
			if (!amount) {
				return res.status(500).send('amount not provided')
			}
			if (currency === undefined) {
				return res.status(500).send('currency not provided')
			}

			const instance = new Razorpay({
				key_id: process.env.RAZORPAY_KEY_ID,
				key_secret: process.env.RAZORPAY_SECRET
			})

			const options = {
				amount: amount, // amount in smallest currency unit
				currency: currency
				// receipt: "receipt_order_74394",
			}

			const order = await instance.orders.create(options)
			if (!order) return res.status(500).send('Some error occured')

			res.json(order)
		} catch (error) {
			return res.status(500).send(error)
		}
	}
)

router.post(
	'/success',
	[
		body('orderCreationId', 'orderCreationId isrequired').not().isEmpty(),
		body('paymentId', 'paymentId isrequired').not().isEmpty(),
		body('orderId', 'orderId isrequired').not().isEmpty(),
		body('signature', 'signature isrequired').not().isEmpty(),
		body('userId', 'userId isrequired').not().isEmpty(),
		body('amount', 'amount isrequired').not().isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		try {
			const { orderCreationId, paymentId, orderId, signature, userId, amount } = req.body

			// const shasum = crypto.createHmac('sha256', 'w2lBtgmeuDUfnJVp43UpcaiT')
			// shasum.update(`${orderCreationId}|${razorpayPaymentId}`)
			// const digest = shasum.digest('hex')

			// comaparing our digest with the actual signature
			// if (digest !== razorpaySignature)
			//     return res.status(400).json({ msg: "Transaction not legit!" });

			// YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

			const transaction = new Transaction({
				creationId: orderCreationId,
				paymentId: paymentId,
				orderId: orderId,
				signature: signature,
				userId: userId,
				amount
			})

			await transaction.save(function (err) {
				if (err) {
					console.log(err)
					return res.status(500).json({ msg: err.message })
				} else {
					return res.json({
						msg: 'success',
						orderId: orderId,
						paymentId: paymentId
					})
				}
			})
		} catch (error) {
			return res.status(500).send(error)
		}
	}
)

module.exports = router
