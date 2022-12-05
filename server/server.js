import express from "express";
import config from "./src/utils/config.js";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(compression());
app.use(cors());



const server = app.listen(config.srv.port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Server error: ${error}`));
