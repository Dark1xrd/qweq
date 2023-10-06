import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
       {props.orders.map(el => (
              <Order key={el.id} item={el} onDelete={props.onDelete}/>
        ))}
    <p className='summa'>Total price: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>Apple shop 95</span>
            <ul className='nav'>
              <li>Кабинет</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
            <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)}className={`shop-cart ${cartOpen && 'active'}`}/>
        </div>
        
        {cartOpen && (
          <div className='shop-cart-act'>
           {props.orders.length > 0 ? 
            showOrders(props) : showNothing()}
          </div>
        )}


        <div className='presentation'></div>
    </header>
  )
}
