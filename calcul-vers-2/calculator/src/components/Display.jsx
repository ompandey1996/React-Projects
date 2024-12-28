// import React from 'react'
   import Style from "./Display.module.css"
function Display({display}) {
  return (
    <div >
      <input type="text" placeholder="Number" className={Style.input}  value={display} readOnly/>
    </div>
  )
}

export default Display