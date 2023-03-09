import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Card(props) {
  //[]{id, image, creditsText}
  return (
    <CardContainer to={`/recipe/${props.id}`}>
      <Img src={props.ele.image} alt="" />
      <Title>{props.ele.title}</Title>
      <Gradient></Gradient>
    </CardContainer>
  );
}
const CardContainer = styled(NavLink)`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  min-height: 25rem;
`;
const Img = styled.img`
  border-radius: 1rem;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 0;
`;
const Title = styled.span`
  z-index: 3;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  color: white;
  width: 100%;
`;
const Gradient = styled.div`
  z-index: 2;
  background: linear-gradient(35deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Card;
