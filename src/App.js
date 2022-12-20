import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FoodEntry from "./Components/FoodEntry";
import FoodView from "./Components/FoodView";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FoodEntry/>} />
          <Route path="/foodview" element={<FoodView/>}/>
          <Route path="/foodentry" element={<FoodEntry/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;