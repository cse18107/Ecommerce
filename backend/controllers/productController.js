const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//CREATE A PRODUCT
exports.createProduct = catchAsyncErrors(async (req, res) => {
  const body = req.body;

  const product = await Product.create(body);
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

// GET ALL PRODUCTS
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  
  
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();
  const products = await apiFeature.query;
  res.status(200).json({
    status: "Success",
    data: {
      products,
    },
  });
});

//GET A PRODUCT
exports.getAProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

// UPDATE A PRODUCT
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  const updatedProduct = await Product.findByIdAndUpdate(id, body);
  res.status(200).json({
    status: "Success",
    message: {
      updatedProduct,
    },
  });
});

// DELETE A PRODUCT
exports.deleteAProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.status(200).json({
    status: "Success",
    message: {
      deletedProduct,
    },
  });
});
