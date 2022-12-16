import CustomError from "../classes/CustomError.class.js";
import ProductDAOMongo from "../services/ProductsDAO.mongo.js";

const DAO = new ProductDAOMongo();

class ProductController {
  saveProduct = async (req, res) => {
    try {
      const doc = await DAO.save(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'saveProduct' method", error);
    }
  };
  updateProduct = async (req, res) => {
    try {
      const doc = await DAO.update(req.body, req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'updateProduct' method", error);
    }
  };
  deleteProduct = async (req, res) => {
    try {
      const doc = await DAO.deleteById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'deleteProduct' method", error);
    }
  };

  getProduct = async (req, res) => {
    try {
      const doc = await DAO.getById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getProduct' method", error);
    }
  };

  getAllProducts = async (req, res) => {
    try {
      const doc = await DAO.getAll(req.query);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getAllProducts' method", error);
    }
  };
}

export default ProductController;
