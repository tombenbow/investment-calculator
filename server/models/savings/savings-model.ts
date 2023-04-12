//Helpers
import {
  calculateArrayOfValuesForTMonths,
  calculateValueOfTotalPotAfterTMonths,
  round,
} from "./helpers";
//Types
import { ISavingsCalculation } from "server/controllers/savings-controllers";

export const calculateSavings = ({
  initialDeposit,
  monthlyDeposit,
  interestRate,
  timeInMonths,
}: ISavingsCalculation) => {
  const [valueOfInitialDepositInTMonths, valueOfMonthlyDepositsinTMonths] =
    calculateValueOfTotalPotAfterTMonths(
      initialDeposit,
      monthlyDeposit,
      interestRate,
      timeInMonths
    );

  const dataArray = calculateArrayOfValuesForTMonths(
    initialDeposit,
    monthlyDeposit,
    interestRate,
    timeInMonths
  );

  const totalCompoundValue = round(
    valueOfInitialDepositInTMonths + valueOfMonthlyDepositsinTMonths
  );

  const interestsGainedOnInitialDeposit = round(
    valueOfInitialDepositInTMonths - initialDeposit
  );

  const interestsGainedOnMonthlyDeposits = round(
    valueOfMonthlyDepositsinTMonths - monthlyDeposit * timeInMonths
  );

  const totalInterestGained = round(
    interestsGainedOnInitialDeposit + interestsGainedOnMonthlyDeposits
  );

  const totalAmountInvested = round(
    initialDeposit + monthlyDeposit * timeInMonths
  );
  return {
    dataArray,
    totalCompoundValue,
    interestsGainedOnMonthlyDeposits,
    interestsGainedOnInitialDeposit,
    totalInterestGained,
    totalAmountInvested,
  };
};
