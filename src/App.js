import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import home from './pages/Home'
import Navigation from './components/Navigation';
import Products from './pages/products'
import carts from './pages/cart'
import Eachproduct from './pages/eachproduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
function Appq(){
  const[cart, setCart] = useState({});

useEffect(()=>{
  const cart = window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));
},[]);

useEffect(()=>{
  window.localStorage.setItem('cart', JSON.stringify(cart));
},[cart]);

    return(
        <>
          <Router>
            <CartContext.Provider value={{ cart, setCart }}>
              {/* we are creating context here in root component because the components which are going to use 
              data , all are present here collectively*/}

            {/* <a href='/'>Home</a> */}
            {/* <a href='/About'> About</a>  */}
            {/* But by using these anchor tags, when we are switching page from one to other, the page is getting refreshed
            , this we do not want , therefore we use link tags of react */}

            {/* <Link to="/">Home</Link>
            <Link to="/About">   About</Link> */}
            <Navigation />
                <Routes>
                      {/* The components present here are the pages imported.*/}
                      <Route path="/" exact Component={home}></Route>
                      <Route path="/Products" exact Component={Products}></Route>
                      <Route path="/Products/:_id" exact Component={Eachproduct}></Route>
                      {/* iska mtlb hai ki jab ye wla path aaye..to ye wla page laao */}
                      <Route path="/cart" Component={carts}></Route>
                </Routes>
            </CartContext.Provider>
          </Router>
        </>
    )

}

export default Appq;