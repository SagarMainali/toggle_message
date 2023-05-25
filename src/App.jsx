// import React, { useState } from 'react'
// import './style.css'

// function App() {

//      const [messages, setMessages] = useState([])

//      function showMessage(e) {
//           const { name } = e.target
//           const string = name === 'add' ? 'Added to cart' : 'Removed from cart'
//           setMessages(prevMessages => ([...prevMessages, string]))
//           setTimeout(() => {
//                // can't use array.shift() to remove the first element because it modifies the state directly
//                setMessages(prevMessages => prevMessages.slice(1))
//           }, 2000)
//      }

//      return (
//           <div className='app'>
//                <button onClick={showMessage} name='add'>Add to cart</button>
//                <button onClick={showMessage} >Remove from cart</button>
//                <div className="messages">
//                     {messages.map((message, index) => <span key={index}>"{message}"</span>)}
//                </div>
//           </div>
//      )
// }

// export default App

import React, { useState, useEffect } from 'react'
import './style.css'

function App() {

     console.log('app rendered')

     const [message, setMessage] = useState('')

     function showMessage(e) {
          const { name } = e.target
          const string = name === 'add' ? 'Added to cart' : 'Removed from cart'
          setMessage(string)
     }

     useEffect(() => {
          console.log('inside useEffect')
          if (message.length > 0) {
               const timer = setTimeout(() => {
                    setMessage('')
               }, 1000)
               // the cleanup function only runs when this componenet unmounts. and the component unmounts when the state 'message' is changed
               return () => clearTimeout(timer)
          }
     })
     //the problem i encountered is that when not assigning any dependency, the useeffect is supposed to run on every render however it runs only
     //once like acting like [], i thought that since the string was not changed while updating the state the app didn't rendered at all causing 
     //the useeffect to not run but app renders at least 2 times which i verified with the console.log('app rendered') at top.
     //example - i clicked the button once - app rendered and then useeffect ran, i again clicked the button before the timer - app rendered but the
     //useeffect didn't rum

     return (
          <div className='app'>
               <button onClick={showMessage} name='add'>Add to cart</button>
               <button onClick={showMessage} >Remove from cart</button>
               <div className="messages">
                    {message.length > 0 && <span>"{message}"</span>}
               </div>
          </div>
     )
}

export default App