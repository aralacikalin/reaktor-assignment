import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import GlovesPage from './containers/GlovesPage';
import Nav from './components/nav';
import FacemasksPage from './containers/FacemasksPage';
import BeaniesPage from './containers/BeaniesPage';


function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path="/reaktor-assignment/gloves" component={GlovesPage} />
      <Route exact path="/reaktor-assignment/facemasks" component={FacemasksPage} />
      <Route exact path="/reaktor-assignment/beanies" component={BeaniesPage} />
    </Router>
  );
}

export default App;
