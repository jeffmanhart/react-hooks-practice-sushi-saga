import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({allSushi , onSushiClick}) {
  const [sushiIndex, setIndex] = useState(0) 

  function handleMoreClick(){
    setIndex(sushiIndex + 4)
  }

  

  return (
    <div className="belt">
      {allSushi.slice(sushiIndex, sushiIndex + 4)
        .map((s)=>{
          return <Sushi 
            key={s.id}
            sushi={s}
            onSushiClick={onSushiClick}
        />
      })}
      <MoreButton moreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
