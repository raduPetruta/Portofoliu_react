import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ImgList from "./components/ImgList";
import Navbar from "./components/Navbar.js";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Overview from "./components/pages/Overview";
import ImgStreet from "./components/pages/imgStreet";
import ImgPortrait from "./components/pages/imgPortrait";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ImgList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/street">
              <ImgStreet />
            </Route>
            <Route path="/portrait">
              <ImgPortrait />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
