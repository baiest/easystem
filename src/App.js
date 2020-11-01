import './App.css';
import { Route, Switch } from "react-router-dom";

import Navegacion from './components/navegacion'
import Principal from './components/principal'
import Footer from './components/footer'
import Servicios from './components/servicios'
import Nosotros from './components/nosotros'
import Contactenos from './components/contactenos'

function App() {
  return (
    <div className="App">
        <Navegacion />
        <Switch>
          <Route exact path = '/'
          component = {Principal}/>
          <Route exact path = '/servicios'
          component = {Servicios}/>
          <Route exact path = '/nosotros'
          component = {Nosotros}/>
           <Route exact path = '/contactenos'
          component = {Contactenos}/>
        </Switch>
        <Footer/>
    </div>
  );
}


export default App;
