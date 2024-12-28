// import React from 'react'
import Styles  from "./ButtonContainer.module.css"
function ButtonContainer() {
  let btns=["1","2","3","4","5","6","7","8","9","+","-","*","/","c"]
  return (
    <div className={Styles.btncontainer}>
      {
        btns.map((btnname)=><button key={btnname}>{btnname}</button>)
      }
    </div>
  )
}

export default ButtonContainer