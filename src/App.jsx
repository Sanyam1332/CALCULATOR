

import Display from './components/Display'
import BtnContainer from './components/BtnContainer'
import Container from './components/Container'
import { useState } from 'react'

function App() {
const [calval,setCalVal]=useState("");
const buttonOnClick=(ButtonsName)=>{
  if(ButtonsName==="C"){
   setCalVal("");
  }
  else if(ButtonsName==="="){
    const result=eval(calval);
    setCalVal(result);
  }
  else{
    const newCalVal=calval +ButtonsName;
    setCalVal(newCalVal);
  }
}
 
  return (
    <Container>
    
     <Display displayValue={calval}></Display>
     <BtnContainer btnClicked={buttonOnClick}></BtnContainer>
     
     </Container>
  )
}

export default App
