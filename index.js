const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const routerCheckout = require('./routes/checkout');
const appRoute = require('./routes/app')
app.use('/api/checkout', routerCheckout);
app.use('/', appRoute);

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});