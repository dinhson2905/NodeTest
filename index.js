var express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World !!! </h1>");
})

app.listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server listen on port " + 6969);
})