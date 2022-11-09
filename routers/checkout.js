const express = require('express');
const routerCheckout = express.Router();
const mercadopago = require('mercadopago');
mercadopago.configure({access_token: "TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010"}); // seller account credentials
routerCheckout.use(express.json()); // Middleware

const checkoutMercadopago = async (preference) =>
{
  try
  {
    const { response } = await mercadopago.preferences.create(preference);
    const data = await response.json();
    return JSON.stringify(data.body);
  }
  catch(error)
  {
    return error;
  }
}

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
    const resMercadopago = checkoutMercadopago(preference);
    res.send(resMercadopago);
    // mercadopago.preferences
    // .create(preference)
    // .then(function (response) {
    //   return res.send(JSON.stringify(response.body));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
});

module.exports = routerCheckout;