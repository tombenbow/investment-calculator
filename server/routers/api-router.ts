//Express
import { Router } from "express";
//Routers
import { savingsRouter } from "./savings-router";
//Errors
import { send404Error } from "../errors/index";

export const apiRouter = Router();

apiRouter.use("/savings", savingsRouter);
apiRouter.route("/").all(send404Error);
