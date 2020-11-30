import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import  { mapStateToProps , mapDispatchToProp } from './reducers/reducer'
import Home from './views/Home/index'
import Navbar from './components/Navbar/navbar'
import Register from './views/Login/Register'
import Login from './views/Login/Login'
import Product from './views/Product/index'
import Order from './views/Order/Order'
import PrivateRoute from  './hoc/PrivateRoute'

import './bootstrap.min.css' 
import './App.css'

const App = (props) => {

  return (
    <BrowserRouter>
    <>
    <Navbar />
      <Switch>
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/login'} component={Login} />
        <PrivateRoute path={'/product/:id'} component={Product} />
        <PrivateRoute exact path={'/order'} component={Order} />
        <PrivateRoute path={'/'} component={Home} />
      </Switch>
      </>
    </BrowserRouter>
  )
}

export default App;
// export default connect(mapStateToProps , mapDispatchToProp , null )(App)
