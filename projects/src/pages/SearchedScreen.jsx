import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/homeComponents/Card";

function SearchedScreen() {
  const [Search, setSearch] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=51d0e725a5f9407891c4892e29d1c70a&query=${params.word}&number=15`
      );
      const data = await api.json();
      console.log("Search items: ", data.results);
      setSearch(data.results);
    };
    fetchData();
  }, [params.word]);

  return (
    <Wrap>
      <Grid>
        {/* {params.word} */}
        {Search.map((ele) => (
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
export default SearchedScreen;
