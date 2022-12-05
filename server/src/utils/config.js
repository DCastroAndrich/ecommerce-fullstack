import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const config = {
  mongoDB: {
    url: `mongodb+srv://${process.env.MONGO_URL}`,
  },
  srv:{
    port: process.env.PORT || 7500,
  },
};

export default config;
