const crypto = require("crypto");

const SECRET_KEY = "f81c3862-d398-4435-bee8-988bf62de5b9";

const payload = {
  data: {
    status: 2000,
    courier: "ZTOSG",
    orderId: "33fcfc31-5035-4f50-91b4-49e3743d814d",
    statusText: "reserved",
    marketplace: "ZTOSG",
    orderNumber: "ODN-2991892056",
    deliveryDate: "2023-04-14T08:56:23.039Z",
    lastMileStatus: null,
    orderLineItems: [
      {
        sku: "iPhone_14_Pro_White",
        quantity: 3,
        productId: "DEMO-1LDLAJOOU",
        lineNumber: "ODN-2991892056-0",
      },
    ],
    trackingNumber: null,
    shippingLabelUrl: "",
    orderWeightInGram: 0,
    recipientInformation: {
      id: "e2ab31f7-2b58-4485-8f8e-22244e590bd4",
      recipientCity: null,
      recipientName: "John Doe",
      recipientEmail: "johndoe@example.com",
      recipientState: null,
      recipientNumber: "+6588888888",
      recipientAddress: "125 Street Example",
      recipientCountry: "Vietnam",
      recipientPostalCode: "290009",
    },
  },
  eventType: "ORDER_STATUS_UPDATE",
  requestId: "66378683-1e42-4e9f-99fc-9de39270439e",
  timestamp: 1681462583350,
  merchantId: "b748490b-70c9-45de-aa20-f09aacc6a53b",
};

const verifyWebhook = (hmacHeader) => {
  const hmac = crypto.createHmac("sha256", SECRET_KEY);
  const hashData = hmac.update(
    JSON.stringify({
      data: {
        status: 2000,
        courier: "ZTOSG",
        orderId: "29cdf361-4e6f-46c4-9c04-b22364e15e5b",
        statusText: "reserved",
        marketplace: "ZTOSG",
        orderNumber: "KHOI-TEST-001",
        deliveryDate: "2023-04-14T09:26:46.257Z",
        lastMileStatus: null,
        orderLineItems: [
          {
            sku: "iPhone_14_Pro_White",
            quantity: 3,
            productId: "DEMO-1LDLAJOOU",
            lineNumber: "KHOI-TEST-001-0",
          },
        ],
        trackingNumber: null,
        shippingLabelUrl: "",
        orderWeightInGram: 0,
        recipientInformation: {
          id: "50364e54-a31b-4eaf-a6c2-11e4c762bdd5",
          recipientCity: null,
          recipientName: "John Doe",
          recipientEmail: "johndoe@example.com",
          recipientState: null,
          recipientNumber: "+6588888888",
          recipientAddress: "125 Street Example",
          recipientCountry: "Vietnam",
          recipientPostalCode: "290009",
        },
      },
      eventType: "ORDER_STATUS_UPDATE",
      requestId: "59701370-5902-423a-86e1-066293c03ed9",
      timestamp: 1681464407346,
      merchantId: "b748490b-70c9-45de-aa20-f09aacc6a53b",
    })
  );
  const genHmac = hashData.digest("hex");
  const calculatedHmac = Buffer.from(genHmac).toString("base64");

  return calculatedHmac === hmacHeader;
};

const webhook = () => {
  const hmacHeader =
    "ZTM4ZTUwZjY2ZTRmZGJlMWFkODM3NDI3YzI0NzY0MGFjZGYxOWI2ZjlmY2RmYjY1NTkyYTA3NjhjMDI1ZjZlMg==";

  const verified = verifyWebhook(hmacHeader);
  console.log({ verified });

  if (verified) {
    console.log(verified);
  } else {
    console.log("error");
  }
};

const generate = () => {
  const secretKey = SECRET_KEY;

  const hmac = crypto.createHmac("sha256", secretKey);
  //passing the data to be hashed
  // const payloadStr = JSON.stringify(payload);
  const payloadStr =
    '{"data":{"status":2000,"courier":"ZTOSG","orderId":"33fcfc31-5035-4f50-91b4-49e3743d814d","statusText":"reserved","marketplace":"ZTOSG","orderNumber":"ODN-2991892056","deliveryDate":"2023-04-14T08:56:23.039Z","lastMileStatus":null,"orderLineItems":[{"sku":"iPhone_14_Pro_White","quantity":3,"productId":"DEMO-1LDLAJOOU","lineNumber":"ODN-2991892056-0"}],"trackingNumber":null,"shippingLabelUrl":"","orderWeightInGram":0,"recipientInformation":{"id":"e2ab31f7-2b58-4485-8f8e-22244e590bd4","recipientCity":null,"recipientName":"JohnDoe","recipientEmail":"johndoe@example.com","recipientState":null,"recipientNumber":"+6588888888","recipientAddress":"125StreetExample","recipientCountry":"Vietnam","recipientPostalCode":"290009"}},"eventType":"ORDER_STATUS_UPDATE","requestId":"66378683-1e42-4e9f-99fc-9de39270439e","timestamp":1681462583350,"merchantId":"b748490b-70c9-45de-aa20-f09aacc6a53b"}';

  const data = hmac.update(payloadStr);

  const gen_hmac = data.digest("hex");
  console.log("generate", Buffer.from(gen_hmac).toString("base64"));
};
// generate();
webhook();
