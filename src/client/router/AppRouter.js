import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' render={() => <div>MAIN COMPONENTS GO HERE</div>} exact={true} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default AppRouter;
