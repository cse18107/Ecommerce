const express = require("express");
const productRouters = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(productRouters.getAllProducts);
router.route("/products/new").post(productRouters.createProduct);
router
  .route("/products/:id")
  .get(productRouters.getAProduct)
  .patch(productRouters.updateProduct)
  .delete(productRouters.deleteAProduct);

module.exports = router;
