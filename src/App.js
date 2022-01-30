
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import InitialComponent from './InitialComponent'
import AboutUs from './components/About Us/AboutUs'


function App() {



  return (
    <Switch>
    <Route exact={true} path = "/" component={InitialComponent} />
    <Route path = "/aboutus" component={AboutUs} />
    </Switch>
  );
}

export default App;
