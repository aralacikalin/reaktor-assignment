import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import GlovesPage from './containers/GlovesPage';


function App() {
  return (
    <Router>
      <Route exact path="/reaktor-assignment/a" component={GlovesPage} />
    </Router>
  );
}

export default App;
