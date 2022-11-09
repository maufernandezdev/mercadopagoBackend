import express from 'express';
const app = express();
const port = process.env.PORT || 9001;
const routerCheckout = require('./routers/checkout');
app.use('/api/checkout', routerCheckout);

app.get('/', (req, res)=>{
    res.send("servidor para realizar checkout con mercadopago");
})

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});