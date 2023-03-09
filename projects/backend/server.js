import express from "express";
const request = require('request');
import data from "./data.js";
const app = express();
const port = process.env.PORT || 5000;
//!~> Endpoints ............................................................
app.get("/api/products", (req, res) => {
    request(
        { url: 'http://localhost:5000/api/productsm' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            return  res.send(data);
            //   res.json(JSON.parse(body));
        }
    )
});


app.listen(port, () => console.log(`http://localhost:${port}`));