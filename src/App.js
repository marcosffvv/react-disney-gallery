import { Routes, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharactersDetailPage from "./pages/CharactersDetailPage/CharactersDetailPage";

function App() {
  return (
    <Router>
        <div>

          <div className="navbar">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/characters">Characters</NavLink>
          </div>
          
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/characters" element={<CharactersPage></CharactersPage>}></Route>
            <Route path="/characters/:id" element={<CharactersDetailPage></CharactersDetailPage>}></Route>
          </Routes>

        </div>
    </Router>
  );
}

export default App;