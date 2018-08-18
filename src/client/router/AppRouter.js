import React from 'react'
import ReactDOM from 'react-dom'
// import createHistory from 'history/createBrowserHistory';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubscribePage from '../components/SubscribePage'
import UnsubscribePage from '../components/UnsubscribePage'
import AdminPage from '../components/AdminPage'

// export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter
    // history={history}
    >
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
