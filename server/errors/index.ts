import express from "express";

interface Error {
  status?: number;
  message?: string;
}

export const sendCustomErrors = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err.message === "Invalid Parameters")
    res.status(400).send({ msg: "Bad Request" });
  else if (err.status) {
    res.status(err.status).send(err);
  } else next(err);
};

export const handleServerErrors = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(500).send({ msg: "Internal Server Error" });
};

export const send404Error = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(404).send({ msg: "Route Not Found" });
};
