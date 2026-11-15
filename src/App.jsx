import { useEffect, useState } from 'react'
import { Outlet  } from 'react-router';

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

  const [isLightTheme, setIsLightTheme] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }

  useEffect(() => {
    let productData = [];
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        for(let product of data) {
          product.price = product.price.toFixed(2);
          productData.push(product);
        }

        setProducts([...productData]);
      });
  }, []);

  function setCartItemQuantity(productId, quantity) {
    let cartItem = cartItems.find((elem) => elem.id === productId);
    if(cartItem) {
      setTotalCartItems(totalCartItems + quantity - cartItem.quantity);
      cartItem.quantity = quantity;

      if(quantity <= 0) {
        let newCartItems = cartItems.filter((elem) => elem.id !== productId);
        setCartItems([...newCartItems]);
      }
    }
    else {
      let productData = products.find((elem) => productId === elem.id);
      if(productData) {
        let cartItemData = {
          id: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          quantity: quantity
        }
        setCartItems([...cartItems, cartItemData]);
        setTotalCartItems(totalCartItems + quantity);
      }
      
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
      <Navbar totalCartItems={totalCartItems} isLightTheme={isLightTheme} toggleTheme={toggleTheme}></Navbar>
      <div className='flex flex-col flex-1 bg-purple-50'>
        <Outlet context={{products, cartItems, setCartItemQuantity, removeCartItem}}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
