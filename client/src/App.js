import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cat from "./components/Cat.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import NotFound from "./components/NotFound.js"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/animals/:animalId"
          render={({ match }) => <Cat animalId={match.params.animalId} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;