import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="App ">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <Signup />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
