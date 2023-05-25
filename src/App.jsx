import React, { useEffect, useState } from 'react'
import './style.css'

function App() {

     const [messages, setMessages] = useState([])

     function showMessage(e) {
          const { name } = e.target
          const string = name === 'add' ? 'Added to cart' : 'Removed from cart'
          setMessages(prevMessages => ([...prevMessages, string]))
          // setTimeout(() => {
          //      // can't use array.shift() to remove the first element because it modifies the state directly
          //      setMessages(prevMessages => prevMessages.slice(1))
          // }, 1000)
     }

     useEffect(() => {
          // this condition prevents unnecessary renders
          if (messages.length > 0) {
               const timer = setTimeout(() => {
                    // can't use array.shift() to remove the first element because it modifies the state directly
                    setMessages(prevMessages => prevMessages.slice(1))
               }, 1000)
               return () => {
                    clearTimeout(timer)
               }
          }
     }, [messages])

     return (
          <div className='app'>
               <button onClick={showMessage} name='add'>Add to cart</button>
               <button onClick={showMessage} >Remove from cart</button>
               <div className="messages">
                    {messages.map((message, index) => <span key={index}>"{message}"</span>)}
               </div>
          </div>
     )
}

export default App