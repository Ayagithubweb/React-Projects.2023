import React from "react";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <Category>
      <CategoryItem to={`/cuisine/Italian`}>
        <FaPizzaSlice />
        <span>Italian</span>
      </CategoryItem>
      <CategoryItem to={"/cuisine/American"}>
        <FaHamburger />
        <span>American</span>
      </CategoryItem>
      <CategoryItem to={"/cuisine/Thai"}>
        <GiNoodles />
        <span>Thai</span>
      </CategoryItem>

      <CategoryItem to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <span>Japanese</span>
      </CategoryItem>
    </Category>
  );
}
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
`;
const CategoryItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  cursor: pointer;
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;
export default Categories;
