import React, { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import SearchBar from "./components/SearchBar";
import { mockFoodList } from "./mock/mockdata";

function App() {
  const [foodList, setFoodList] = useState(mockFoodList);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <SearchBar />
      <FoodList foodList={foodList} />
    </div>
  );
}

export default App;
