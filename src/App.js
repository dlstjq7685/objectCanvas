import React, { Component } from 'react';
import './App.css';

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import {
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter
} from "react-router-dom";

import Test1 from './pages/test1'
import Test2 from './pages/test2'
import Test3 from './pages/test3'
import Test4 from './pages/test4'
import Test5 from './pages/test5'

import Navi from './components/navigator'

import Can from './modules/ObjectCanvas'

class App extends Component {

    constructor(props) {
      super(props);
      
    }

    /*
      Todo:
        Animate rendering
    */
    render() {
      return (
        <div>
          <Navi/>
          <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={300}
          >


          <Switch>
            <Route exact path="/">
              <Test1/>
            </Route>
            <Route path="/test1">
              <Test2/>
            </Route>
            <Route exact path="/test2">
              <Test3/>
            </Route>
            <Route path="/test3">
              <Test4/>
            </Route>
            <Route exact path="/p/:id" component={Test5} />
            <Route exact path="/test2/test2" component={Test2} />

            <Route path="*">
              <div>
                Not Found
              </div>
            </Route>
          </Switch>

          </CSSTransition>
          </TransitionGroup>

          <Can/>

        </div>
      );
            
    }
  }

  
App = withRouter(App);

export default App;
