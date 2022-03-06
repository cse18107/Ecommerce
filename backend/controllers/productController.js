const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//CREATE A PRODUCT
exports.createProduct = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;
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
exports.getAllProducts = catchAsyncErrors(async (req, res,next) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    productsCount,
    products,
    resultPerPage
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

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
  }
  product.numberOfReviews = product.reviews.length;
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );
  let avg = 0;
  reviews.forEach((rev) => {
    avg += rev.rating;
  });
  const ratings = avg / reviews.length;
  const numberOfReviews = reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numberOfReviews,
    },
    {
      new: true,
      rucValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
  });
});
