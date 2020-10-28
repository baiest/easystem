import logo from './logo.svg';
import './App.css';
import Navegacion from './components/navegacion'
import Principal from './components/principal'
import Footer from './components/footer'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
function App() {
  return (
    <div className="App">
      <Router history = {createBrowserHistory()}>
        <Navegacion />
        <Switch>
          <Route exact path = '/Hola'
          component = {Principal}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}


export default App;
