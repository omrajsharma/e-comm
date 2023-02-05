import React from 'react'
import Navbar from './components/molecules/Navbar'
import Footer from './components/molecules/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import ItemList from './components/organisms/ItemList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div>

      <Router>
        <Navbar/>


        {/* <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br /> */}


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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer/>

    </div>
  )
}

export default App