import { useState } from "react";
import Navbar from "./cmps/Navbar/Navbar"
import { Calc } from "./cmps/Calc/Calc";


function App() {
  const [currPage, setCurrPage] = useState<string>('מחשבון חיסכון')


  return (
    <div className="">
      <Navbar currPage={currPage} setCurrPage={setCurrPage}/>
      {
        currPage==='מחשבון חיסכון'&& <Calc></Calc>
      }
     
    </div>
  );
}

export default App
