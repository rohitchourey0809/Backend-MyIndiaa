const nock = require("nock");

nock("https://api.logisticsprovider.com").post("/ship").reply(200, {
  success: true,
  trackingId: "0987654321",
});

console.log("Mock for Logistics Provider set up");
