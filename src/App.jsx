import "./App.css";
import Home from "./components/pages/home";
import { Routes, Route } from "react-router-dom";
import Sports from "./components/pages/Sports";
import Tech from "./components/pages/tech";
import Navbar from "./components/navbar/Navbar";
import Business from "./components/pages/business";
import Entertainment from "./components/pages/entertainment";

function App() {
  return (
    <>
      <Navbar
        title={"YesG News"}
        brandUrl={
          "https://img.icons8.com/cotton/64/000000/morning-news--v1.png"
        }
        links={[
          {
            link: "Top 10",
            path: "/",
          },
          {
            link: "Sports",
            path: "/sport",
          },
          {
            link: "Tecnology",
            path: "/tech",
          },
          {
            link: "Entertainment",
            path: "/Entertainment",
          },
          {
            link: "Business",
            path: "/Business",
          },
        ]}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sport" element={<Sports />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/entertainment" element={<Entertainment />} />
        <Route exact path="/business" element={<Business />} />
      </Routes>
    </>
  );
}

export default App;
