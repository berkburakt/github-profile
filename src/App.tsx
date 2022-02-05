import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path="/" element = { <Home /> }> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
