const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require('crypto');
require("dotenv").config();

const Transaction = require('../models/Transaction')

router.post("/order", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const { amount , currency } = req.body;
        if(!amount) {
            return res.status(500).send('amount not provided')
        }
        if(currency === undefined) {
            return res.status(500).send('currency not provided')
        }
        const options = {
            amount: amount, // amount in smallest currency unit
            currency: currency,
            // receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post("/success", async (req, res) => {    
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            userId,
            amount
        } = req.body;

        const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");
        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        // if (digest !== razorpaySignature)
        //     return res.status(400).json({ msg: "Transaction not legit!" });

        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        const transaction = new Transaction({
            creationId: orderCreationId, 
            paymentId: razorpayPaymentId,
            orderId: razorpayOrderId,
            signature:razorpaySignature,
            userId: userId,
            amount 
        })

        await transaction.save(function (err) {
            if (err) { 
              return res.status(500).json({ msg: err.message }); 
            }
        })

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;