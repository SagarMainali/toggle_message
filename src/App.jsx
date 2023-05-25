import React, { useEffect, useState } from 'react'
import './style.css'

function App() {
     const [messages, setMessages] = useState([])
     function add() {
          setMessages(prevMessages => ([...prevMessages, "Added to cart"]))
     }
     useEffect(() => {
          const timer = setTimeout(() => {
               setMessages(prevMessages => prevMessages.slice(1))
          }, 1000)

          return () => {
               clearTimeout(timer)
          }
     }, [messages])
     return (
          <div className='app'>
               <button onClick={add}>Add to cart</button>
               {messages.map((message, index) => <span key={index}>"{index} - {message}"</span>)}
          </div>
     )
}

export default App