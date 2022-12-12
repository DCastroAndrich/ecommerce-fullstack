import express from "express";
import config from "./src/utils/config.js";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";

import AuthRouter from "./src/routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));





/* ROUTES */

app.use("/api/auth", new AuthRouter().start());






/* SERVER LISTEN */

const server = app.listen(config.srv.port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Server error: ${error}`));
