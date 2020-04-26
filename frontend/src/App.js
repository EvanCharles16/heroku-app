import React from "react";
import "./App.css";

import Navbars from "./components/Navbar/Navbars";
import Content from "./pages/Content/Content";
import About from "./pages/About/About";
// import Article from "./pages/Detail/Article";
// import Detail from "./pages/Detail/Detail";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
// import Socialmedia from "./components/Footer/Socialmedia";
import Heroku from "./pages/Heroku";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/article" component={Article} />
        <Route exact path="/article/:id" component={Detail} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/heroku" component={Heroku} />
      </Switch>
      {/* <Socialmedia /> */}
    </Router>
  );
}

export default App;
