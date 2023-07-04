import { useEffect, useState } from "react";
import reviews from "./data";
import Review from "./Review";

const App = () => {
  const [index,setIndex] = useState(0);
  const prev = ()=>{
    if(index!==0){
      setIndex(index-1);
    }
    else{
      setIndex(reviews.length-1)
    }
  }
  const next = ()=>{
    if(index !== reviews.length-1){
      setIndex(index+1)
    }
    else{
      setIndex(0)
    }
  }
  const random = ()=>{
    let randomInt = Math.floor(Math.random()*reviews.length);
    if(randomInt===index){
      randomInt = randomInt+1;
      if(randomInt>reviews.length-1){
        randomInt= randomInt-2;
      }
    }
    setIndex(randomInt)
  }
  return (
    <main>
      <Review reviews={reviews[index]} prev={prev} next={next} random={random}/>
    </main>
  );
};
export default App;
