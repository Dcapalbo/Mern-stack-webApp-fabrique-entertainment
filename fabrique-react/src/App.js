import { Switch, Route } from 'react-router-dom';
// scss files 
import './assets/variables.scss';
import './assets/mixin.scss';
import './assets/typography.scss';
import './assets/reset.scss';
// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
    </Switch>
  )
}

export default App;
