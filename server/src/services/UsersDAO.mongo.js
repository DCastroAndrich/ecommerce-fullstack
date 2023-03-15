import CustomError from "../classes/CustomError.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import UserModel from "../models/User.model.js";
import { generateToken } from "../auth/jwt.auth.js";
import CryptoJS from "crypto-js";
import config from "../utils/config.js";
import DAO from "../classes/DAO.class.js";

const SEC_HASH = config.crypto.CIPHER;

class UserDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = UserModel;
    this.connection = new MongoClient();
  }

  /* REGISTRATION */

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

      const { password } = userdata;

      const cipherText = CryptoJS.AES.encrypt(
        JSON.stringify(password),
        SEC_HASH
      ).toString();

      const newUser = new this.collection({
        ...userdata,
        password: cipherText,
      });

      doc = await newUser.save();

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error saving new user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* LOGIN */

  async login(userdata) {
    let user;

    try {
      await this.connection.connect();

      user = await this.collection.findOne({
        username: userdata.username,
      });
      if (!user) {
        return  "Wrong Username" ;
      }

      const cipherText = await CryptoJS.AES.decrypt(user.password, SEC_HASH);

      const psswrd = JSON.parse(cipherText.toString(CryptoJS.enc.Utf8));

      if (psswrd != userdata.password) {
        return "Wrong Password";
      }
      const accessToken = generateToken(user);

      const { password, ...others } = user._doc;

      return { ...others, accessToken };
    } catch (error) {
      const err = new CustomError(500, "Error login user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* UPDATE */

  async update(userdata, id) {
    let doc = null;
    try {
      await this.connection.connect();
      const { password } = userdata;

      if (password) {
        password = CryptoJS.AES.encrypt(password, SEC_HASH).toString();
      }

      doc = await this.collection.findByIdAndUpdate(
        id,
        {
          $set: userdata,
        },
        { new: true }
      );

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error updating user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* DELETE */

  async deleteById(id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findByIdAndDelete(id);
      return { message: "User has been deleted...", ...doc };
    } catch (error) {
      const err = new CustomError(500, "Error deleting user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET USER BY ID */

  async getById(id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findById(id);

      const { password, ...others } = doc._doc;

      return others;
    } catch (error) {
      const err = new CustomError(500, "Error getting the user", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET ALL USERS */

  async getAll(data) {
    let doc = [];
    const query = data.new;
    try {
      await this.connection.connect();

      const users = query
        ? (doc = await this.collection.find().sort({ _id: -1 }).limit(5))
        : (doc = await this.collection.find());

      return users;
    } catch (error) {
      const err = new CustomError(500, "Error getting all users", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET USERS STATS */

  async getStats() {
    let doc = null;
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
      await this.connection.connect();

      doc = await this.collection.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting users stats", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }
}

export default UserDAOMongo;
