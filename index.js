import express from 'express';
const app = express();
const port = process.env.PORT || 9001;

app.get('/', (req, res)=>{
    return res.send("servidor para realizar checkout con mercadopago");
});

app.post('/api/checkout',(req , res) => {

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

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});