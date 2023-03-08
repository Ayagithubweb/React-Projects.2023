import React from 'react'
import Pouplar from '../components/homeComponents/Popular'
import Veggie from '../components/homeComponents/Veggie'
import styled from "styled-components";


function HomeScreen() {
  return (
    <Wrap>
      <Pouplar/>
      <Veggie/>
    </Wrap>
  )
}
const Wrap = styled.div`
  margin: 1rem 10rem;
`;
export default HomeScreen
