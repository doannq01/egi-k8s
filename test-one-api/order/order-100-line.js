const axios = require('axios');

let orderData = []

const orderObject = [
{
    "orderNumber": "D-1304-BULK-06",
    "deliveryDate": "2023-04-24",
    "cashOnDeliveryAmount": 3,
    "isDoCollection": true,
    "trackingNumber": "CARCAR1524198378",
    "shippingLabelUrl": "http://example.com",
    "courier": "ZTOSG",
    "marketplace": "ZTOSG",
    "remarks": "987967567",
    "recipientInformation": {
        "recipientEmail": "tom@example.com",
        "recipientName": "Peter",
        "recipientNumber": "+6588888888",
        "recipientCity": "Midview",
        "recipientState": "Midview",
        "recipientAddress": "SAAAG",
        "recipientPostalCode": "223111"
    }
}
]

const orderLineItems=[]

for (let index = 0; index < 100; index++) {
    orderLineItems.push({
      "sku": "100002",
      "lineNumber": `Line-${index + 1}`,
      "price": 1,
      "quantity": 1
    })
}

orderObject[0].orderLineItems = orderLineItems

let data = {
    "create": orderObject
}

const config = {
  method: 'post',
  url: 'https://uat.one-api.fulfil.ztoasia.com/v1/order/bulk-create',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZjJiNzJlOC1lMzc2LTQ4MDAtYTI4MS00MTQzODQ2YjhkM2YiLCJ1c2VybmFtZSI6Ik5IVU5HIFRFU1QgVUFUIiwiY2xpZW50SWQiOiI0ZjJiNzJlOC1lMzc2LTQ4MDAtYTI4MS00MTQzODQ2YjhkM2YiLCJtZXJjaGFudElkIjoiODYxNjhlN2ItZWI2MC00NGNhLTkzMDAtNDFhYjI3ZmE3ZmNiIiwiY29tcGFueVByZWZpeCI6Ik5IVU4iLCJidXNpbmVzc05hbWUiOiJNQUkgTEFOIiwiaWF0IjoxNjgxMzc5MzEyLCJleHAiOjE2ODE5ODQxMTJ9.n6JXW2dFWbg5sq-3f9ESnCpPm7o0H78AJb8joydxYcg',
    'Content-Type': 'application/json'
  },
  data
};

axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.response.data);
  });
