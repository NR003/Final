import Profile from "./Components/Profile";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Contact from "./Components/Contact";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="App">
      <Profile />

      <Router>
        <div>
          <nav>
            <ul>
              <li className="link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link">
              <Link to="/movie">Movie</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;