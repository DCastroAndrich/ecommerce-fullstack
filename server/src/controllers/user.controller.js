import CustomError from "../classes/CustomError.class.js";
import UserDAOMongo from "../services/UsersDAO.mongo.js";

const DAO = new UserDAOMongo();

class UserController {
  saveUser = async (req, res) => {
    try {
      const doc = await DAO.save(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'saveUser' method", error);
    }
  };

  loginUser = async (req, res) => {
    try {
      const doc = await DAO.login(req.body);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'loginUser' method", error);
    }
  };
  updateUser = async (req, res) => {
    try {
      const doc = await DAO.update(req.body, req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'updateUser' method", error);
    }
  };
  deleteUser = async (req, res) => {
    try {
      const doc = await DAO.deleteById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'deleteUser' method", error);
    }
  };
  getUser = async (req, res) => {
    try {
      const doc = await DAO.getById(req.params.id);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getUser' method", error);
    }
  };
  getAllUsers = async (req, res) => {
    try {
      const doc = await DAO.getAll(req.query);
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getAllUsers' method", error);
    }
  };
  getUsersStats = async (req, res) => {
    try {
      const doc = await DAO.getStats();
      res.status(200).json(doc);
    } catch (error) {
      throw new CustomError(500, "Error in 'getUsersStats' method", error);
    }
  };
}

export default UserController;
