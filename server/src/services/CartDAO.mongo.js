import CustomError from "../classes/CustomError.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import CartModel from "../models/Cart.model.js";
import DAO from "../classes/DAO.class.js";

class CartDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = CartModel;
    this.connection = new MongoClient();
  }

  /* CREATE */
  async save(cartdata) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.create(cartdata);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error saving new cart", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* UPDATE */

  async update(cartdata, id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findByIdAndUpdate(
        id,
        {
          $set: cartdata,
        },
        { new: true }
      );

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error updating cart", error);
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
      return { message: "Cart has been deleted...", ...doc };
    } catch (error) {
      const err = new CustomError(500, "Error deleting cart", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET CART BY ID */

  async getById(userId) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findOne(userId);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting the cart", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET ALL CARTS */

  async getAll() {
    let doc = [];
    try {
      await this.connection.connect();

      doc = await this.collection.find();
      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting all carts", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }
}

export default CartDAOMongo;
