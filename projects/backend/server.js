import express from "express";
import request from "request";
// const reqq = require('request');
import data from "./data.js";
const app = express();
const port = process.env.PORT || 5000;
//!~> Endpoints ............................................................
app.get("/api/products", (req, res) => {
    res.send(data);
    // request(
    //     { url: 'http://localhost:5000/api/products' },
    //     (error, response, body) => {
    //         if (error || response.statusCode !== 200) {
    //             return res.status(500).json({ type: 'error', message: err.message });
    //         }
    //         return 
    //         //   res.json(JSON.parse(body));
    //     }
    // )
});
app.get("/price", (req, res) => {
    res.send({ "price": "3.77" });
    /*request(
        { url: 'http://localhost:5000/price' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
           
        }
    )*/

});

app.listen(port, () => console.log(`http://localhost:${port}`));