import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolios from './components/Portfolios/Portfolios';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/portfolio'>
            <Portfolios></Portfolios>
          </Route>
          <Route path='/Contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
