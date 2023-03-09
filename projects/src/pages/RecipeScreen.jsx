import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function RecipeScreen() {
  const [Recipe, setRecipe] = useState([]);
  const [ActiveBtn, setActiveBtn] = useState("Instructions");

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=51d0e725a5f9407891c4892e29d1c70a`
      );
      const data = await api.json();
      console.log("Recipe items: ", data.results);
      setRecipe(data.results);
    };
    fetchData();
  }, []);

  return (
    <DetailWrapper>
      <div>
        <h2>{Recipe.title}</h2>
        <img src={Recipe.image} alt="" />
      </div>
      <Info>
        <Button
          className={ActiveBtn === "Instructions" ? "active" : ""}
          onClick={setActiveBtn("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={ActiveBtn === "Ingredients" ? "active" : ""}
          onClick={setActiveBtn("Ingredients")}
        >
          Ingredients
        </Button>
        <div>
          {ActiveBtn === "Instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: Recipe.summary }} />
              <h3 dangerouslySetInnerHTML={{ __html: Recipe.instructions }} />
            </div>
          )}
          {ActiveBtn === "Ingredients" && (
            <ul>
              {Recipe.extendedIngredients.map((ele) => {
                <li key={ele.id}>{ele.orginal}</li>;
              })}
            </ul>
          )}
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background-color: white;
  border: 2px soild black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default RecipeScreen;
