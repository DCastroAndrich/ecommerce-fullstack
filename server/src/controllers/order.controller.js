import CustomError from "../classes/CustomError.class.js";
import OrderDAOMongo from "../services/OrderDAO.mongo.js";

const DAO = new OrderDAOMongo();

class OrderController {
  saveOrder = async (req, res) => {
    try {
      const doc = await DAO.save(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'saveOrder' method", error);
    }
  };
  updateOrder = async (req, res) => {
    try {
      const doc = await DAO.update(req.body, req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'updateOrder' method", error);
    }
  };
  deleteOrder = async (req, res) => {
    try {
      const doc = await DAO.deleteById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'deleteOrder' method", error);
    }
  };

  getOrder = async (req, res) => {
    try {
      const doc = await DAO.getById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getOrder' method", error);
    }
  };

  getAllOrders = async (req, res) => {
    try {
      const doc = await DAO.getAll(req.query);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getAllOrders' method", error);
    }
  };
  getStatsOrders = async (req, res) => {
    try {
      const doc = await DAO.getAll(req.query);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getAllOrders' method", error);
    }
  };
}

export default OrderController;
