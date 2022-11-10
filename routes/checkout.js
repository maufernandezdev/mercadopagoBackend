const express = require('express');
const checkoutRoute = express.Router();
checkoutRoute.use(express.json()); // Middleware

checkoutRoute.post('/',(req , res) => {

    const preference = {
        items: [
          {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
          },
        ],
    };
    return res.send(JSON.stringify(preference));
});

module.exports = checkoutRoute;