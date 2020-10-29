import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Navegacion from './components/navegacion'
import Principal from './components/principal'
import Footer from './components/footer'
import Servicios from './components/servicios'
import Nosotros from './components/nosotros'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <Switch>
          <Route exact path = '/'
          component = {Principal}/>
          <Route exact path = '/servicios'
          component = {Servicios}/>
          <Route exact path = '/nosotros'
          component = {Nosotros}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
