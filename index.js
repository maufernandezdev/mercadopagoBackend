import express from 'express';
const app = express();
const port = process.env.PORT || 9001;

app.get('/', (req, res)=>{
    res.send("index page");
})

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});