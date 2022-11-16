const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 9001;
const checkoutRoute = require('./routes/checkout');
app.use('/api/checkout', checkoutRoute);

app.get('/', (req, res)=>{
    return res.send('servidor para realizar checkout con mercadopago');
});

app.get('*', (req, res) => {
    res.send('404 ruta no encontrada en el servidor');
})

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});