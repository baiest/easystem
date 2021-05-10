import './App.css';
import { Route, Switch } from "react-router-dom";

import Navegacion from './components/navegacion'
import Footer from './components/footer'
import Contactenos from './components/contactenos'
import Principal from './pages/principal'
import Servicios from './pages/servicios'
import Nosotros from './pages/nosotros'

function App() {
  return (
    <div className="App">
        <Navegacion nombre='Easystem'/>
        <div className="container">

        <Switch>
          <Route exact path = '/'
          render = {() => <Principal/>}/>
          <Route exact path = '/servicios'
          component = {Servicios}/>
          <Route exact path = '/nosotros'
          component = {Nosotros}/>
           <Route exact path = '/contactenos'
          component = {Contactenos}/>
        </Switch>
          </div>
        <Footer/>
    </div>
  );
}


export default App;
