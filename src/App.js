/** @format */
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
