import CustomError from "../classes/CustomError.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import OrderModel from "../models/Order.model.js";
import DAO from "../classes/DAO.class.js";

class OrderDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = OrderModel;
    this.connection = new MongoClient();
  }

  /* CREATE */
  async save(orderdata) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.create(orderdata);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error saving new order", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* UPDATE */

  async update(orderdata, id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findByIdAndUpdate(
        id,
        {
          $set: orderdata,
        },
        { new: true }
      );

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error updating order", error);
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
      return { message: "Order has been deleted...", ...doc };
    } catch (error) {
      const err = new CustomError(500, "Error deleting order", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET ORDER BY ID */

  async getById(userId) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.find(userId);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting the order", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET ALL ORDERS */

  async getAll() {
    let doc = [];
    try {
      await this.connection.connect();

      doc = await this.collection.find();
      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting all orders", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET MONTHLY STATS */

  async getStats() {
    let doc = null;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
      await this.connection.connect();

      doc = await this.collection.aggregate([
        { $match: { createdAt: { $gte: prevMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting orders stats", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }
}

export default OrderDAOMongo;
