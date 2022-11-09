const routerCheckout = express.Router();
const mercadopago = require('mercadopago');
mercadopago.configure({access_token: "TEST-7974656510754281-030814-20836cabe8f81d381a051d44e9a11510-162067010"}); // seller account credentials
routerCheckout.use(express.json()); // Middleware

routerCheckout.post('/',(req , res) => {

    // const itemsList = req.body
    const preference = {
        items: [
          {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
          },
        ],
    };

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log("response body: " + JSON.stringify(response.body));
      return res.send(JSON.stringify(response.body));
      //res.redirect(response.body.init_point);
    })
    .catch(function (error) {
        res.send(error)
        //console.log(error);
    });
});

module.exports = routerCheckout;