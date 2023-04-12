//Helpers
import * as yup from "yup";

export const validateSavingsSchema = async (paramsObject: unknown) => {
  let schema = yup.object().shape({
    initialDeposit: yup.number().required().positive(),
    monthlyDeposit: yup.number().required().positive(),
    interestRate: yup.number().required().positive(),
    timeInMonths: yup.number().required().positive(),
  });

  return await schema.isValid(paramsObject);
};
