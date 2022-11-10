const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const checkoutRoute = require('./routes/checkout');
app.use('/api/checkout', checkoutRoute);

app.get('/', (req, res)=>{
    return res.send("servidor para realizar checkout con mercadopago");
});

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});