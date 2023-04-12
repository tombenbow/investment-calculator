# Intro

This is an API that can calculate how much a pension savings pot will be worth given an initial deposit, 
future monthly deposits, and interest rate, after a fixed number of months.

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




