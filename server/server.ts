//Express
import express from "express";
//Routers
import { apiRouter } from "./routers/api-router";
//Errors
import { handleServerErrors, send404Error, sendCustomErrors } from "./errors";

export const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
app.use("/api", apiRouter);
app.use(sendCustomErrors);
app.use(handleServerErrors);
app.all("/*", (req, res, next) => {
  send404Error(req, res, next);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
