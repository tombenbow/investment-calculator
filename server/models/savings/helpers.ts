export const calculateValueOfInitialDeposit = (
  initialDeposit: number,
  interestRate: number,
  timeInMonths: number
) => {
  const finalValue = initialDeposit * (1 + interestRate / 12) ** timeInMonths;
  return round(finalValue);
};

export const calculateValueOfMonthlyDeposits = (
  monthlyDeposit: number,
  interestRate: number,
  timeInMonths: number
) => {
  const finalValue =
    (monthlyDeposit * ((1 + interestRate / 12) ** timeInMonths - 1)) /
    (interestRate / 12);

  return round(finalValue);
};

export const calculateValueOfTotalPotAfterTMonths = (
  initialDeposit: number,
  monthlyDeposit: number,
  interestRate: number,
  timeInMonths: number
) => {
  const valueOfInitialDepositInTMonths = calculateValueOfInitialDeposit(
    initialDeposit,
    interestRate,
    timeInMonths
  );

  const valueOfMonthlyDepositsinTMonths = calculateValueOfMonthlyDeposits(
    monthlyDeposit,
    interestRate,
    timeInMonths
  );

  return [valueOfInitialDepositInTMonths, valueOfMonthlyDepositsinTMonths];
};

export const calculateArrayOfValuesForTMonths = (
  initialDeposit: number,
  monthlyDeposit: number,
  interestRate: number,
  timeInMonths: number
) => {
  const dataArray = [];
  for (let i = 0; i <= timeInMonths; i += 12) {
    let [valueOfInitialDepositInTMonths, valueOfMonthlyDepositsinTMonths] =
      calculateValueOfTotalPotAfterTMonths(
        initialDeposit,
        monthlyDeposit,
        interestRate,
        i
      );

    dataArray.push(
      round(valueOfInitialDepositInTMonths + valueOfMonthlyDepositsinTMonths)
    );
  }

  return dataArray;
};

export const round = (value: number) => {
  return Math.round(value * 100) / 100;
};
