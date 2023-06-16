import Navi from "./Components/Navbar"
import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from "./Components/Homepage"

function App() {
  return (
      <Router>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" element={<Homepage/>} />
          <Route path="/contact" element={<Homepage/>} />
            <Route path="/st" element={<Homepage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
