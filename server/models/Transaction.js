const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({

    userId: {    
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
    amount: {
    type: Number,
    required: true
    },
    creationId: {
    type: String,
    required: true,
    },
    paymentId: {
    type: String,
    required: true,
    unique: true,
    },
    orderId: {
    type: String,
    required: true,
    },
    signature: {
    type: String,
    default: false,
    },
    date: {
    type: Date,
    default: Date.now,
    }

});

module.exports = mongoose.model("transaction", UserSchema);
