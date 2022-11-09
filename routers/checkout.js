const express = require('express');
const routerCheckout = express.Router();
const mercadopago = require('mercadopago');
mercadopago.configure({access_token: "TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010"});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 

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
    res.send(JSON.stringify(preference));
    // mercadopago.preferences
    // .create(preference)
    // .then(function (response) {
    //   return res.send(JSON.stringify(response.body));
    // })
    // .catch(function (error) {
    //   res.send(error);
    // });
});

module.exports = routerCheckout;