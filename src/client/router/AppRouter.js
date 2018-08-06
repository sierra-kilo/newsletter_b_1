import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubscribePage from '../components/SubscribePage'
import UnsubscribePage from '../components/UnsubscribePage'
import AdminPage from '../components/AdminPage'


const AppRouter = () => (
  <BrowserRouter history={browserHistory}>
    <div className='flex-holder'>
      <Header/>
      <main>
        <Switch>
          <Route path='/' component={SubscribePage} exact={true} />
          <Route path='/unsubscribe' component={UnsubscribePage} />
          <Route path='/admin' component={AdminPage} />
        </Switch>
      </main>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default AppRouter;
