import { expect } from "chai";
import request from "supertest";
import { app } from "../server";

describe("api", () => {
  it("Returns Error 404: 'Route Not Found' when passed invalid route", async () => {
    const response = await request(app).get("/InvalidRoute");
    expect(response.statusCode).to.equal(404);
    expect(response.body.msg).to.equal("Route Not Found");
  });

  it("Returns Error 404: 'Route Not Found' when passed invalid method", async () => {
    const patchResponse = await request(app).patch("/api").send({});
    expect(patchResponse.statusCode).to.equal(404);
    expect(patchResponse.body.msg).to.equal("Route Not Found");

    const deleteResponse = await request(app).delete("/api");
    expect(deleteResponse.statusCode).to.equal(404);
    expect(deleteResponse.body.msg).to.equal("Route Not Found");

    const postResponse = await request(app).post("/api").send({});
    expect(postResponse.statusCode).to.equal(404);
    expect(postResponse.body.msg).to.equal("Route Not Found");
  });

  describe("/savings", () => {
    it("GET: Returns Status 200 && savings data when passed valid params", async () => {
      const response = await request(app).get(
        "/api/savings?initialDeposit=2000&monthlyDeposit=500&interestRate=0.03&timeInMonths=24"
      );
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.eql({
        dataArray: [2000, 8144.02, 14474.92],
        totalCompoundValue: 14474.92,
        interestsGainedOnMonthlyDeposits: 351.41,
        interestsGainedOnInitialDeposit: 123.51,
        totalInterestGained: 474.92,
        totalAmountInvested: 14000,
      });
    });

    it("GET: Returns Status 400 when passed invalid params", async () => {
      const response = await request(app).get(
        "/api/savings?initialDeposit=2000"
      );
      expect(response.statusCode).to.equal(400);
      expect(response.body.msg).to.equal("Bad Request");
    });

    it("Returns Error 404: 'Route Not Found' when passed invalid route", async () => {
      const response = await request(app).get("/api/savings/NotARoute");
      expect(response.statusCode).to.equal(404);
      expect(response.body.msg).to.equal("Route Not Found");
    });

    it("Returns Error 404: 'Route Not Found' when passed invalid methods", async () => {
      const patchResponse = await request(app).patch("/api/savings").send({});
      expect(patchResponse.statusCode).to.equal(404);
      expect(patchResponse.body.msg).to.equal("Route Not Found");

      const deleteResponse = await request(app).delete("/api/savings").send({});
      expect(deleteResponse.statusCode).to.equal(404);
      expect(deleteResponse.body.msg).to.equal("Route Not Found");

      const postResponse = await request(app).post("/api/savings").send({});
      expect(postResponse.statusCode).to.equal(404);
      expect(postResponse.body.msg).to.equal("Route Not Found");
    });
  });
});
