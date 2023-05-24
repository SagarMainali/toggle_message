import React, { useState } from 'react'
import './style.css'

function App() {
     const [messages, setMessages] = useState([])
     function add() {
          
     }
     return (
          <div className='app'>
               <button onClick={add}>Add to cart</button>
               {messages.map(message => <span>"Added to cart"</span>)}
          </div>
     )
}

export default App