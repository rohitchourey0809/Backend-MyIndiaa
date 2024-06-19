const nock = require("nock");

nock("https://api.paymentgateway.com").post("/charge").reply(200, {
  success: true,
  transactionId: "1234567890",
});

console.log("Mock for Payment Gateway set up");
