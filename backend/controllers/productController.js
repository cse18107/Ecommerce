const Product = require("../model/productModel");

//CREATE A PRODUCT
exports.createProduct = async (req, res) => {
  const body = req.body;
  try {
    const product = await Product.create(body);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "Success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

//GET A PRODUCT
exports.getAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json({
      status: "Success",
      message: {
        product,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

// UPDATE A PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const product = await Product.findById(id);
    if (product) {
      const updatedProduct = await Product.findByIdAndUpdate(id, product);
      res.status(200).json({
        status: "Success",
        message: {
          updatedProduct,
        },
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.stack,
    });
  }
};

// DELETE A PRODUCT
exports.deleteAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
      const deletedProduct = await Product.findByIdAndDelete(id);
      res.status(200).json({
        status: "Success",
        message: {
          deletedProduct,
        },
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};
