import React from "react";
import "./styles/main.scss";
import About from "./pages/About";
// import background from "./camera1.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import LoginSignup from "./pages/Login-Signup";
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
        <Route path="/login-signup" component={LoginSignup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
