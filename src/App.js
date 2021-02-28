import React from "react";
import {  BrowserRouter as Router,  Switch,
  Route,  Link, } from "react-router-dom";
import Home from './components/home/Home';
import Cv from './components/cv/Cv';
import Footer from './components/footer/footer.js';
import './App.css'


export default function App() {
  return (<>
    <Router>
      <div>
        <ul className="ulRoute">
          <li  >
            <Link to="/" ><p className="transformed">Home</p></Link>
          </li>
          <li>
            <Link to="/cv"><p className="transformed">CV</p></Link>
          </li>
          {/* <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>

        <Switch>
          <Route path="/cv">
            <Cv />
          </Route>
          {/* <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <footer>
          <Footer/>
    </footer>
    </>
  );
}
