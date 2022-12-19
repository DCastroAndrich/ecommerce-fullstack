import CustomError from "../classes/CustomError.class.js";

import MercadoPagoService from "../services/MercadoPago.service.js";

const Payment = new MercadoPagoService();

class MercadoPagoController {
  getPaymentLink = async (req, res) => {
    try {
      const doc = await Payment.createPayment(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getPaymentLink' method", error);
    }
  };
}

export default MercadoPagoController;
