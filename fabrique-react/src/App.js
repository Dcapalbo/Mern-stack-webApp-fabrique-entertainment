// importing the react router dom version 6 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// scss files 
import './assets/variables.scss';
import './assets/mixin.scss';
import './assets/typography.scss';
import './assets/reset.scss';
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Films from './pages/Films';
import Film from './pages/Film';
import NewFilm from './pages/NewFilm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/films" element={<Films />}/>
        <Route path="/films/:film" element={<Film />}/>
        <Route path="/films/addNewFilm" element={<NewFilm />}/>
      </Routes>
    </Router>
  )
}

export default App;
