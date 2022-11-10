const express = require('express');
const checkoutRoute = express.Router();
checkoutRoute.use(express.json()); // Middleware
const mercadopago = require('mercadopago'); // SDK de Mercado Pago
mercadopago.configure({access_token: 'TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010'}); // seller account credentials

checkoutRoute.post('/',(req , res) => {

    const preference = {
        items: [
          {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
          },
        ],
        back_urls: {
            success: 'https://mercadopago-backend.vercel.app/',
            failure: 'https://mercadopago-backend.vercel.app/',
            pending: 'https://mercadopago-backend.vercel.app/'
        },
        auto_return: 'approved',
    };
    mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return res.redirect(response.body.init_point);
    })
    .catch(function (error) {
        res.send(error)
    });
});

module.exports = checkoutRoute;