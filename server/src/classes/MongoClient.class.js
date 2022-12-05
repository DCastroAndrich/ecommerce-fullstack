import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";
import mongoose from "mongoose";
import config from "../utils/config.js";

class MongoClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }
  async connect() {
    try {
      await this.client.connect(config.mongoDB.url);
      this.connected = true;
      console.info("Connected to Mongo Atlas Database");
    } catch (error) {
      throw new CustomError(
        500,
        "Error connecting to Mongo Atlas Database",
        error
      );
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();
      this.connected = false;
      console.info("Disconnected from Mongo Atlas Database");
    } catch (error) {
      throw new CustomError(
        500,
        "Error disconecting from Mongo Atlas Database",
        error
      );
    }
  }
}

export default MongoClient;
