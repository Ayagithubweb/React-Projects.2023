import express from "express";
import data from "./data.js";
const app = express();
const port = process.env.PORT || 5000;
//!~> Endpoints ............................................................
app.get("/api/products", (req, res) => {
    res.send(data)
});


app.listen(port, () => console.log(`http://localhost:${port}`));