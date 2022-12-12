import CustomError from "../classes/CustomError.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import UserModel from "../models/User.model.js";

class UserDAOMongo {
  constructor() {
    this.collection = UserModel;
    this.connection = new MongoClient();
  }

  async save(userdata) {
    let doc = null;

    try {
      await this.connection.connect();

      const userExist = await this.collection.findOne({
        username: userdata.username,
      });

      if (userExist) {
        return { message: "'username' already exists." };
      }

      const newUser = new this.collection({
        "username": userdata.username,
        "email": userdata.email,
        "password": userdata.password,
      });

      doc = await newUser.save();
    } catch (error) {
      const err = new CustomError(500, "Error saving new user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }
}

export default UserDAOMongo;
