import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import Navbar from './components/Navbar'
import Product from './product/Product'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar/>

      <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
          <Route path="/">
            <ItemList/>
          </Route>
        </Switch>
      </Router>

      <Footer/>

    </div>
  )
}

export default App