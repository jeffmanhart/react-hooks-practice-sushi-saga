import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi , setSushi] = useState([])
  const [funds , setFunds] = useState(100)

  useEffect(()=> {
    fetch(API)
    .then((resp)=>resp.json())
    .then((sushi)=> {
      const newSushi = sushi.map((s)=>{
        return { ...s, eaten: false}
      })
      
      setSushi(newSushi)
    })
  }, [])

  function handleSushiClick(eaten){
    if(eaten.price > funds){
      alert("Insufficient funds, please add more!")
    }else{
      const updatedSushis = sushi.map((s)=>{
        if(s.id === eaten.id){
          return { ...s, eaten: true}
        }else{
          return s
        }
      })

      setSushi(updatedSushis)
      setFunds(funds - eaten.price)
    }

  }

  const eatenPlates = sushi.filter((s)=>s.eaten)
  
  return (
    <div className="app">
      <SushiContainer allSushi= {sushi} onSushiClick={handleSushiClick}/>
      <Table balance={funds} plates={eatenPlates}/>
    </div>
  );
}

export default App;
