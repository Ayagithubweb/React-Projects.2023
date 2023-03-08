import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/homeComponents/Card";

function CuisineScreen() {
  const params = useParams();
  console.log(params.name);

  const [Cuisine, setCuisine] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=15&cuisine=${params.name}`
      );
      const res = await api.json(); // standard text-based format for representing structured data based on JavaScript object syntax
      setCuisine(res.results);
      console.log("res", res.results);
    };
    fetchData();
  }, [params.name]);
  return (
    <Wrap>
      <Grid>
        {Cuisine.map((ele) => (
          <Card ele={ele} />
        ))}
      </Grid>
    </Wrap>
  );
}
const Wrap = styled.div`
  margin: 0 2rem;
`;
const Grid = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;
export default CuisineScreen;
