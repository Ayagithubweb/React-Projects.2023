import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import CardItem from "../components/CardItem";
import data from "./data";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("http://localhost:5000/api/products");
      setProducts(res.data.Products);
      console.log(res.data.Products);
    };
    fetchData();
  }, []);
  return (
    <div className="container overflow-hidden text-center">
      <div className="row gy-5 ">
        <h3>Our Products</h3>
        {data.Products.map((ele) => (<div className="d-flex justify-content-center align-items-center col-sm-12 col-md-6 col-lg-4 col-xl-3 m-auto" key={ele.slug}>
            <div className="p-3 ">
              {/* {ele.name} */}
              <CardItem ele={ele} />
              
            </div>
          </div>)
          
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
