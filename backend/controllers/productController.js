const Product = require('../models/productModel')

exports.getAllProduct = (req, res) => {
  res.status(200).json({ message: "Route is Working" });
};
