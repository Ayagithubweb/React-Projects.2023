import "../src/App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import SearchBox from "./components/navComponents/SearchBox";
import Categories from "./components/navComponents/Categories";
import RecipeScreen from "./pages/RecipeScreen";
import CuisineScreen from "./pages/CuisineScreen";
import { GiFoodTruck } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Nav to={"/"}>recipe <GiFoodTruck /></Nav>
        <SearchBox />
        <Categories />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/recipe/:id" element={<RecipeScreen />} />
          <Route path="/cuisine/:name" element={<CuisineScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Nav = styled(Link)`
  margin: 3rem 3rem;
  font-size: 2rem;
  text-decoration: none;
  color:rgba(0, 0, 0, 1);
`;
export default App;
