import './App.css';
import { Route, Switch } from "react-router-dom";

import Navegacion from './components/navegacion'
import Footer from './components/footer'
import Contactenos from './components/contactenos'
import Principal from './pages/principal'
import Servicios from './pages/servicios'
import Nosotros from './pages/nosotros'
import Tarifas from './pages/tarifas'
import Podcast from './pages/podcast'
import Error404 from './components/error404'

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
          <Route exact path = '/tarifas'
          component = {Tarifas}/>
          <Route exact path = '/nosotros'
          component = {Nosotros}/>
          <Route exact path = '/contactenos'
          component = {Contactenos}/>
          <Route exact path = '/podcast'
          component = {Podcast}/>
          <Route exact path = '*'
          component = {Error404}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
