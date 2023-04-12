import { expect } from "chai";
import { calculateSavings } from "../models/savings/savings-model";

describe("Savings Model", () => {
  describe("calculateSavings", () => {
    it("returns an object with the right keys", async () => {
      const resultObject = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 24,
      });

      expect(resultObject)
        .to.be.an.an("object")
        .that.has.all.keys(
          "dataArray",
          "totalCompoundValue",
          "interestsGainedOnMonthlyDeposits",
          "interestsGainedOnInitialDeposit",
          "totalInterestGained",
          "totalAmountInvested"
        );
    });

    it("returns an object with the correct values for different lengths of time", async () => {
      const resultObjectAtT0 = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 0,
      });

      expect(resultObjectAtT0).to.deep.include({
        dataArray: [2000],
        totalCompoundValue: 2000,
        interestsGainedOnMonthlyDeposits: 0,
        interestsGainedOnInitialDeposit: 0,
        totalInterestGained: 0,
        totalAmountInvested: 2000,
      });

      const resultObjectAtT24 = await calculateSavings({
        initialDeposit: 2000,
        monthlyDeposit: 500,
        interestRate: 0.03,
        timeInMonths: 24,
      });
      expect(resultObjectAtT24).to.deep.include({
        dataArray: [2000, 8144.02, 14474.92],
        totalCompoundValue: 14474.92,
        interestsGainedOnMonthlyDeposits: 351.41,
        interestsGainedOnInitialDeposit: 123.51,
        totalInterestGained: 474.92,
        totalAmountInvested: 14000,
      });
    });
  });
});
