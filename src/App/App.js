import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
