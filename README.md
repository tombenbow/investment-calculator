# Intro

This is an API that can calculate how much a pension savings pot will be worth in the future.
It takes an initial deposit, future monthly deposits, an annualised interest rate, and a fixed number of months in which the pot will mature.

This API is an express API, roughly following an MVC pattern.
The controller is used mostly to validate the data received before passing it on to the model.
The model does not connect to any database but simply perform the calculations needed.

There is a small amount of error handling for the basic error codes.

The API is tested using Mocha, Chai, and Supertest with both unit and intergration testing.

# Run Instructions

To run it locally :

1. Clone this repo on your machine

2. Cd into the newly created folder and run `yarn install`

3. Cd into server and run `yarn install`

4. To run the server tests from the root level : `yarn test`

5. To run the API locally on your machine: `yarn start`

# Example Request & Response body
[http://localhost:3001/api/savings?initialDeposit=2000&monthlyDeposit=500&interestRate=0.03&timeInMonths=24]

```
{
    dataArray: [ 2000, 8144.02, 14474.92 ],
    totalCompoundValue: 14474.92,
    interestsGainedOnMonthlyDeposits: 351.41,
    interestsGainedOnInitialDeposit: 123.51,
    totalInterestGained: 474.92,
    totalAmountInvested: 14000
}
```





