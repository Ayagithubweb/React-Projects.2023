import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [input, setinput] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);

    // go to searedScreen with word
  };
  return (
    <div>
      <FromStyle action="" onSubmit={handelSubmit}>
        <div>
          <FaSearch />
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
        </div>
      </FromStyle>
    </div>
  );
}
const FromStyle = styled.form`
  margin: 0 20rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin: 1rem;
  }
  svg {
    padding: 1rem 0.5rem;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default SearchBox;
