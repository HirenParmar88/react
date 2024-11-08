import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props:{
//       href: 'https:google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

//const anotherUser="aaa"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  <h2>click me to visit google</h2>,
  //anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //reactElement
    <App />
  
)
