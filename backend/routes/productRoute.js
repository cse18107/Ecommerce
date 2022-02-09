const express = require("express");
const productRouters = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

router.route("/products").get(productRouters.getAllProducts);
router.route("/products/new").post( isAuthenticatedUser,authorizeRoles("admin"), productRouters.createProduct);
router
  .route("/products/:id")
  .get(productRouters.getAProduct)
  .patch( isAuthenticatedUser,authorizeRoles("admin"), productRouters.updateProduct)
  .delete( isAuthenticatedUser,authorizeRoles("admin"), productRouters.deleteAProduct);

module.exports = router;
