import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
