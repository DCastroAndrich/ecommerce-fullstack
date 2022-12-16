import jwt from "jsonwebtoken";
import config from "../utils/config.js";

const PRIVATE = config.jwt.SEC_KEY;

export const generateToken = (data) => {
  const token = jwt.sign({ id: data._id, isAdmin: data.isAdmin }, PRIVATE, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, PRIVATE, (error, user) => {
      if (error) res.status(403).json("Token is invalid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You're not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};
