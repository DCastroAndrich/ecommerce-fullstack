import CustomError from "../classes/CustomError.class.js";
import config from "../utils/config.js";
import mercadopago from "mercadopago";

mercadopago.configure({ access_token: config.mercadoPago.MP_TOKEN });

class MercadoPagoService {
  constructor() {}

  /* CREATE PAYMENT */
  async createPayment(paymentData) {
    let doc = null;
    try {
      let preference = {
        items: [
          {
            title: paymentData.title,
            unit_price: Number(paymentData.price),
            quantity: Number(paymentData.quantity),
          },
        ],
        back_urls: {
          success: "/success",
          failure: "/failure",
          pending: "/pending",
        },
        auto_return: "approved",
      };
      doc = await mercadopago.preferences.create(preference);
    } catch (error) {
      const err = new CustomError(500, "Error creating payment link", error);
      console.error(err);
      throw err;
    }
  }
}

export default MercadoPagoService;
