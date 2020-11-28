const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const {authenticateToken:auth} = require("../middleware/auth");
const crypto = require('crypto');

const User = require("../models/User");
const Product = require('../models/Product')


router.get("/:id" , async (req, res) => {
    try {
      const {id} = req.params;
      const products = await Product.findById(id)
      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
});

router.get("/" , async (req, res) => {
    try {
      const products = await Product.find().sort({
        date: -1,
      });
      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
});

router.post('/' , auth ,  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "description is required").isEmail(),
    check("price","Please enter price").isNumeric(),
  ], async(req,res) => {

    try {
        const { name,description,price } = req.body
        const product = new Product({
            name,description,price
        })
        await product.save((err , data) => {
            if (err) { 
              return res.status(500).json({ msg: err.message }); 
            } 
            return res.json(product)
        })
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
