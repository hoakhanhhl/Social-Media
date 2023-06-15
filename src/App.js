import { Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";
// import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/login" element={<Auth/>}/>
        </Routes>
    </div>
  );
}

export default App;