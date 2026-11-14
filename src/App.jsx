import { useEffect, useState } from 'react'
import { Outlet  } from 'react-router';
import './App.css'

import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

/*
  Fake Store API Product Format
  -----------------------------------------
  title: string
  category :string
  description: string
  id: int
  image: string (url)
  price: number
  rating: {rate: number, count: int}
*/

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    let productData = [];
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        for(let product of data) {
          productData.push(product);
        }

        setProducts([...productData]);
      });
  }, []);

  function setCartItemQuantity(productId, quantity) {
    let cartItem = cartItems.find((elem) => elem.productId === productId);
    if(cartItem) {
      setTotalCartItems(totalCartItems + quantity - cartItem.quantity);
      cartItem.quantity = quantity;
    }
    else {
      setCartItems([...cartItems, { productId: productId, quantity: quantity }]);
      setTotalCartItems(totalCartItems + quantity);
    }
  }

  function removeCartItem(productId) {
    let newItems = cartItems.filter((elem) => {
      if(elem.productId === productId) {
        setTotalCartItems(totalCartItems - elem.quantity);
        return false;
      }
      else {
        return true;
      }
    });

    setCartItems(...newItems);
  }

  return (
    <div className='flex flex-col w-full min-h-dvh bg-zinc-200 px-8'>
      <Navbar totalCartItems={totalCartItems}></Navbar>
      <div className='flex flex-col flex-1 bg-purple-50'>
        <Outlet context={{products, cartItems, setCartItemQuantity, removeCartItem}}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
