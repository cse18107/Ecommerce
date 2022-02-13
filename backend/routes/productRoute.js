const express = require("express");
const productControllers = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/products").get(productControllers.getAllProducts);
router
  .route("/admin/products/new")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    productControllers.createProduct
  );
router
  .route("/admin/products/:id")
  .patch(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    productControllers.updateProduct
  )
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    productControllers.deleteAProduct
  );
router.route("/product/:id").get(productControllers.getAProduct);

router
  .route("/review")
  .put(isAuthenticatedUser, productControllers.createProductReview);

router
  .route("/reviews")
  .get(productControllers.getProductReviews)
  .delete(isAuthenticatedUser, productControllers.deleteReview);

module.exports = router;
