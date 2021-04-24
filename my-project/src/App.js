import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./component/CreatePost";
import Post from "./component/Post";
import EditPost from "./component/EditPost";
import Docs from "./pages/Docs";

function App(props) {
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
          <Route exact path="/create">
            <Navbar />
            <CreatePost />
          </Route>
          <Route exact path="/post/:id">
            <Navbar />
            <Post />
          </Route>
          <Route exact path="/edit/:id">
            <Navbar />
            <EditPost />
          </Route>
          <Route exact path="/docs">
            <Navbar />
            <Docs />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
