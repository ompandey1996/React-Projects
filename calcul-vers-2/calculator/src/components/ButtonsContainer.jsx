// import React from 'react'
 import Style from "./ButtonsContainer.module.css"
function ButtonsContainer({btnclick}) {
let btncontainer=["1","2","3","4","5","6","7","8","9","0","=","+","-","*","/","c"];
  return (
    <div className={Style.buttoncont} >
    {
      btncontainer.map((btnname)=><button key={btnname} onClick={()=>btnclick(btnname)}>{btnname}</button>)
    }
    </div>
  )
}

export default ButtonsContainer