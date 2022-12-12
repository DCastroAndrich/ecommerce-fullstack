import CustomError from "../classes/CustomError.class.js";
//import MongoClient from "../classes/MongoClient.class.js";
//import UserModel from "../models/User.model.js";
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
}

export default UserController;
