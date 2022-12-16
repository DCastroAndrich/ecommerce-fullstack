import CustomError from "../classes/CustomError.class.js";
import MongoClient from "../classes/MongoClient.class.js";
import ProductModel from "../models/Product.model.js";
import DAO from "../classes/DAO.class.js";

class ProductDAOMongo extends DAO {
  constructor() {
    super();
    this.collection = ProductModel;
    this.connection = new MongoClient();
  }

  /* CREATE */
  async save(productdata) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.create(productdata);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error saving new product", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* UPDATE */

  async update(producData, id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findByIdAndUpdate(
        id,
        {
          $set: producData,
        },
        { new: true }
      );

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error updating product", error);
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
      return { message: "Product has been deleted...", ...doc };
    } catch (error) {
      const err = new CustomError(500, "Error deleting product", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET PRODUCT BY ID */

  async getById(id) {
    let doc = null;
    try {
      await this.connection.connect();

      doc = await this.collection.findById(id);

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting the product", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }

  /* GET ALL PRODUCTS */

  async getAll(data) {
    let doc = [];
    const queryNew = data.new;
    const queryCategory = data.category;
    try {
      await this.connection.connect();

      if (queryNew) {
        doc = await this.collection.find().sort({ cretedAt: -1 }).limit(5);
      } else if (queryCategory) {
        doc = await this.collection.find({
          categories: { $in: [queryCategory] },
        });
      } else {
        doc = await this.collection.find();
      }

      return doc;
    } catch (error) {
      const err = new CustomError(500, "Error getting all products", error);
      console.error(err);
      throw err;
    } finally {
      this.connection.disconnect();
    }
  }
}

export default ProductDAOMongo;
