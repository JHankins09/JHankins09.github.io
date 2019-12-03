import React from 'react'

let whereAmI = function(x) {
  return x
}


const Error = () => (
  <div>
    <h1>Oops! I don't currently have a page at '{whereAmI(window.location.pathname.replace('/', '').replace('/', ''))}'</h1>
    <p>Try getting back on track below!</p>
  </div>
)

export default Error
