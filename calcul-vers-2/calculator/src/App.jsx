import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import Style from"./App.module.css"
import { useState } from "react"
function App() {
    let[calcvalue,Setcalc]=useState(" ")
  function   btnclick(btnname){
    if(btnname==="c"){
      Setcalc("")
    }
    else if(btnname==="="){
      let result=eval(calcvalue)
      Setcalc(result);
    }
    else{
       let displayvalue = calcvalue + btnname;
        console.log(displayvalue);
      Setcalc(displayvalue); 
    }

  }
  return (
    <div className={Style.calculator}>
     <Display display={calcvalue}/>
     <ButtonsContainer btnclick={btnclick}/>
    </div>
  )
}

export default App