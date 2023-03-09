import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import CardItem from "../components/CardItem";
import data from "../data.js";

function HomeScreen() {
  /*const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("http://localhost:5000/api/products");
      setProducts(res.data.Products);
      console.log(res.data.Products);
    };
    fetchData();
  }, []);*/
  return (
    <div className="container overflow-hidden text-center">
      <div className="row gy-5">
        {data.Products.map((ele)=>{
          <div className="col-6" key={ele.slug}>
          <div className="p-3">
            {/* {ele.name} */}
            <CardItem ele={ele}/>
          </div>
        </div>  
        })}
        
        
      </div>
    </div>
  );
}

export default HomeScreen;
