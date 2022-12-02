import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>Helloooooo</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
