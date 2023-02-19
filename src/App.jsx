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
  Route
} from "react-router-dom";
import ProductDetail from './components/Pages/ProductDetail'
import Cart from './components/Pages/Cart'

function App() {
  const [cartList, setCartList] = React.useState([])

  const addToCart = (item) => {
    setCartList([...cartList, item])
  }

  const removeFromCart = (item) => {
    setCartList(cartList.filter((cartItem) => cartItem.id !== item.id))
  }

  return (
    <div>

      <Router>
        <Navbar
          cartList={cartList}
        />


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
          <Route path="/product/:id">
            <ProductDetail
              addToCart={addToCart}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartList={cartList}
              removeFromCart={removeFromCart}
            />
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