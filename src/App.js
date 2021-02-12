import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import GlovesPage from './containers/GlovesPage';
import Nav from './components/nav';
import FacemasksPage from './containers/FacemasksPage';
import BeaniesPage from './containers/BeaniesPage';


function App() {
  return (
    <Nav/>
  );
}

export default App;
