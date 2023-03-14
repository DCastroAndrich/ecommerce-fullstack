import express from "express";
import config from "./src/utils/config.js";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import AuthRouter from "./src/routes/auth.routes.js";
import UserRouter from "./src/routes/user.routes.js";
import ProductRouter from "./src/routes/product.routes.js";
import CartRouter from "./src/routes/cart.routes.js";
import OrderRouter from "./src/routes/order.routes.js";
import MercadoPagoRouter from "./src/routes/mercadoPago.routes.js";

const app = express();

/* MIDDLEWARES */

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */

app.use("/api/auth", new AuthRouter().start());
app.use("/api/users", new UserRouter().start());
app.use("/api/products", new ProductRouter().start());
app.use("/api/carts", new CartRouter().start());
app.use("/api/orders", new OrderRouter().start());
//app.use("/api/payments", new MercadoPagoRouter().start());

/* SERVER LISTEN */

const server = app.listen(config.srv.port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Server error: ${error}`));
