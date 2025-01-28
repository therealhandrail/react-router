import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Blue.jsx';  // Ensure this import points to the correct file location
import Red from './Red.jsx';    // Ensure this import points to the correct file location

function App() {
  return (
    <>
      <div id="container">
        <h1>Your App</h1>
        <div id="navbar">
          <ul>
            <li><Link to="/blue">Blue</Link></li>
            <li><Link to="/red">Red</Link></li>
          </ul>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;