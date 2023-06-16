import Navi from "./Components/Navbar"
import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from "./Components/Homepage"

function App() {
  return (
      <Router>
        <Navi />
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={Homepage} />
          <Route path="/contact" component={Homepage} />
          <Route component={Homepage} />
        </Routes>
      </Router>
  );
}

export default App;
