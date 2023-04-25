const axios = require('axios');

let orderData = []

for (let index = 0; index < 100; index++) {
  orderData.push(
    {
      "orderNumber": `1404-Bulk-${index+1}`,
      "deliveryDate": "2023-08-24T14:15:22Z",
      "remarks": "Thong-1",
      "cashOnDeliveryAmount": 0,
      "isDoCollection": true,
      "isExchange": true,
      "trackingNumber": `Doan-${index+1}`,
      "shippingLabelUrl": "http://example.com",
      "courier": "ZTOSG",
      "marketplace": "ZTOSG",
      "orderLineItems": [{
        "sku": "100002",
        "lineNumber": `Line-${index+1}`,
        "price": 1000,
        "quantity": 1
  }],
      "recipientInformation": {
          "recipientEmail": "phonghuynh@example.com",
          "recipientName": "Phong Huynh",
          "recipientNumber": "+84969651617",
          "recipientAddress": "125 Tran Hung Dao",
          "recipientCity": null,
          "recipientState": null,
          "recipientCountry": "Vietnam",
          "recipientPostalCode": "290009"
      }
  })
}

let data = {
    "create": orderData
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
