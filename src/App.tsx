import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import External from './External';
import About from './About';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/external">External</Link>
        </div>
        <Routes>
          <Route path="/" element = { <Home /> }>
          </Route>
          <Route path="/about" element = { <About /> }>
          </Route>
          <Route path="/external" element = { <External /> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
