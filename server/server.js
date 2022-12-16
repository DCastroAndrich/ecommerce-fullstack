import express from "express";
import config from "./src/utils/config.js";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";

import AuthRouter from "./src/routes/auth.routes.js";
import UserRouter from "./src/routes/user.routes.js";
import ProductRouter from "./src/routes/product.routes.js";
import CartRouter from "./src/routes/cart.routes.js";
import OrderRouter from "./src/routes/order.routes.js";

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */

app.use("/api/auth", new AuthRouter().start());
app.use("/api/users", new UserRouter().start());
app.use("/api/products", new ProductRouter().start());
app.use("/api/carts", new CartRouter().start());
app.use("/api/orders", new OrderRouter().start());

/* SERVER LISTEN */

const server = app.listen(config.srv.port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Server error: ${error}`));
