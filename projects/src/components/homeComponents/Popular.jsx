import React, { useEffect, useState } from "react";
import Card from "./Card";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function Popular() {
  //Popular
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    const exist = localStorage.getItem("Popular");
    if (exist) {
      setPopular(JSON.parse(exist)); //JSON.parse() -> the process of converting a JSON object in text format to a Javascript object that can be used inside a program.
    } else {
      const fetchData = async () => {
        const api = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=15"
        );
        const res = await api.json(); // standard text-based format for representing structured data based on JavaScript object syntax
        setPopular(res.recipes);
        console.log(res.recipes);
        localStorage.setItem("Popular", JSON.stringify(res.recipes)); // converts a JavaScript value to a JSON string
      };
      fetchData();
    }
  }, []);
  console.log("populer", Popular);
  return (
    <>
      <h2>Pouplar recipes</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
          cover: true,
          // height: "10rem",
          lazyLoad: "nearby",
        }}
      >
        {Popular.map((ele, index) => {
          return (
            <SplideSlide key={index}>
              <Card ele={ele} />
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default Popular;
