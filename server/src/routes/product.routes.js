import express from "express";
import ProductController from "../controllers/product.controller.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../auth/jwt.auth.js";

const router = express.Router();

class ProductRouter {
  constructor() {
    this.controller = new ProductController();
  }

  start() {
    router.post("/", verifyTokenAndAdmin, this.controller.saveProduct);
    router.put("/:id", verifyTokenAndAdmin, this.controller.updateProduct);
    router.delete("/:id", verifyTokenAndAdmin, this.controller.deleteProduct);
    router.get("/find/:id", this.controller.getProduct);
    router.get("/", this.controller.getAllProducts);

    return router;
  }
}

export default ProductRouter;
