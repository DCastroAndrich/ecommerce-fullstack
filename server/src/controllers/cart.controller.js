import CustomError from "../classes/CustomError.class.js";
import CartDAOMongo from "../services/CartDAO.mongo.js";

const DAO = new CartDAOMongo();

class CartController {
  saveCart = async (req, res) => {
    try {
      const doc = await DAO.save(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'saveCart' method", error);
    }
  };
  updateCart = async (req, res) => {
    try {
      const doc = await DAO.update(req.body, req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'updateCart' method", error);
    }
  };
  deleteCart = async (req, res) => {
    try {
      const doc = await DAO.deleteById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'deleteCart' method", error);
    }
  };

  getCart = async (req, res) => {
    try {
      const doc = await DAO.getById(req.params.userId);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getCart' method", error);
    }
  };

  getAllCarts = async (req, res) => {
    try {
      const doc = await DAO.getAll();
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getAllCarts' method", error);
    }
  };
}

export default CartController;
