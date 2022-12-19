import express from "express";
import MercadoPagoController from "../controllers/mercadoPago.controller.js";
import { verifyTokenAndAuthorization } from "../auth/jwt.auth.js";

const router = express.Router();

class MercadoPagoRouter {
  constructor() {
    this.controller = new MercadoPagoController();
  }
  start() {
    router.post(
      "/checkout",
      verifyTokenAndAuthorization,
      this.controller.getPaymentLink
    );
    return router;
  }
}

export default MercadoPagoRouter;
