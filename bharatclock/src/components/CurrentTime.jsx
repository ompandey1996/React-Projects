import { useState,useEffect} from "react";
let CurrentTime = () => {
  let[time,Settime]=useState(  new Date())
  useEffect(()=>{
   const intervalId=setInterval(()=>{
    Settime(new Date()
  )},1000)
   return ()=>{
    clearInterval(intervalId);
    console.log()
   }
  },[])


  return (
    <p className="lead text-success">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;