import Navi from "./Components/Navbar"
import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from "./Components/Homepage"
import Test from "./Components/test/index"
import Build from "./Components/build/index"
import Choose from "./Components/Choose"
import Audio from "./Components/Audio"
import Addgesture from "./Components/Addgesture"
import Adtwo from "./Components/ad2";
function App() {
  return (
      <Router>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
            <Route path="/home" exact element={<Homepage/>} />
          <Route path="/LiveStream" element={<Test/>} />
          <Route path="/contact" element={<Audio/>} />
            <Route path="/st" element={<Build/>}/>
            <Route path="/choose" element={<Choose/>}>

            </Route>
            <Route path="/addgesture" element={<Addgesture/>}/>
            <Route path="/ad2" element={<Adtwo/>}/>
        </Routes>
      </Router>
  );
}

export default App;
