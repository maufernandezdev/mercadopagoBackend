const express = require('express');
const checkoutRoute = express.Router();
checkoutRoute.use(express.json()); 
const mercadopago = require('mercadopago');
mercadopago.configure({access_token: 'TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010'}); // seller account credentials

checkoutRoute.get('/success', (req,res) =>{
    console.log(req.query);
    console.log(req.query.payment_id);
    console.log(req.query.status);
    // save data in a data base ad then redirect to ecommerce again
    res.redirect(`https://mercadopago-frontend.vercel.app/success.html?payment_id=${req.query.payment_id}`);
});

checkoutRoute.get('/mercadopago/status', (req,res) =>{
    //handle webhook from mercadopago - notification url
    res.status(200).send(req.body);
    return 'OK';
});

checkoutRoute.post('/',(req , res) => {

    const status = `https://mercadopago-backend.vercel.app/api/checkout/mercadopago/status`
    const preference = {
        items: req.body,
        back_urls: {
            success: 'https://mercadopago-backend.vercel.app/api/checkout/success',
            failure: 'https://mercadopago-backend.vercel.app/api/checkout/failure',
            pending: 'https://mercadopago-backend.vercel.app/api/checkout/pending'
        },
        auto_return: 'approved',
        notification_url: status,
    };
    mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return res.send({ init_point: response.body.init_point });
    })
    .catch(function (error) {
        res.send(error)
    });
});

module.exports = checkoutRoute;