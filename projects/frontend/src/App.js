import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App d-flex flex-column mb-3 justify-content-between">
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter></div>
  );
}

export default App;
