import Navi from "./Components/Navbar"
import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from "./Components/Homepage"
import Test from "./Components/test/index"
import Build from "./Components/build/index"
import Choose from "./Components/Choose"
function App() {
  return (
      <Router>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" element={<Test/>} />
          <Route path="/contact" element={<Homepage/>} />
            <Route path="/st" element={<Build/>}/>
            <Route path="/choose" element={<Choose/>}/>
        </Routes>
      </Router>
  );
}

export default App;
