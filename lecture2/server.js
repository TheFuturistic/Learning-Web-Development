const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'));

const logMiddleware = (req, res, next) => {
    req.data = "this is data from middleware";
    console.log("request url: ", req.url, "method: ", req.method);
    next();
};

app.use(logMiddleware);

app.get('/', (req, res) => {
    console.log("homepage");
    console.log("data from middleware: ", req.data);                           
    res.send('Hello World!');
}); 

const apiMiddleware = (req, res, next) => {
    if (API_KEY != "1234"){
        res.send("API key is not valid");
    };
    next();
};


app.use(apiMiddleware);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 