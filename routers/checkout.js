const express = require('express');
const routerCheckout = express.Router();
const mercadopago = require('mercadopago');
mercadopago.configure({access_token: "TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010"}); // seller account credentials
routerCheckout.use(express.json()); // Middleware

routerCheckout.post('/',(req , res) => {

    const preference = {
        items: [
          {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
          },
        ],
    };

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return res.send(JSON.stringify(response.body));
    })
    .catch(function (error) {
        res.send(error)
    });
});

module.exports = routerCheckout;