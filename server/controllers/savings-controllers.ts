//Express
import express from "express";
//Models
import { calculateSavings } from "../models/savings/savings-model";
//Helpers
import { validateSavingsSchema } from "./validation";
import { parseParams } from "./helpers";

export interface ISavingsCalculation {
  monthlyDeposit: number;
  initialDeposit: number;
  interestRate: number;
  timeInMonths: number;
}

export const getSavings = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const params = req.query as unknown;

    parseParams(params);

    const validParams = await validateSavingsSchema(params);

    if (!validParams) throw new Error("Invalid Parameters");

    const dataObject = calculateSavings(params as ISavingsCalculation);

    res.status(200).send(dataObject);
  } catch (err) {
    next(err);
  }
};
