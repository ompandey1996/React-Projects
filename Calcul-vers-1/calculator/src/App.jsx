// import React from 'react'
  import "./App.css" 
import ButtonContainer from "./Comp/ButtonContainer"
import Display from "./Comp/Display"
function App() {
  return (
    <>

      <h1>Calculater</h1>
      <div className="calculator">
       <Display/>
       <ButtonContainer></ButtonContainer>
      </div>
    </>
  )
}

export default App