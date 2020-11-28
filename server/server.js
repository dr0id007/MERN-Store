const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/users', require('./routes/users'));
app.use('/api/product' , require('./routes/products'))
app.use('/api/payment' , require('./routes/payment'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started, Port :  ${PORT}`));
