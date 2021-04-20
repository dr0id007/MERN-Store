const Mongoose = require('mongoose')
const { Schema } = Mongoose

const ProductSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	image: {
		type: String
	},
	description: {
		type: String,
		trim: true
	},
	quantity: {
		type: Number
	},
	price: {
		type: Number
	},
	brand: {
		type: String,
		default: null
	},
	rating: {
		type: Number,
		default: 0
	},
	reviewCount: {
		type: Number,
		default: 0
	},
	updated: Date,
	created: {
		type: Date,
		default: Date.now
	}
})

module.exports = Mongoose.model('Product', ProductSchema)
