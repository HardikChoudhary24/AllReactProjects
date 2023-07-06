import { useState } from "react";
import menu from "../src/data"
import List from "./List";

const App = () => {
  const [data, setData] = useState(menu);
  const filterProducts= (product)=>{
    setData(menu.filter((value)=>{
      if (product==="all"){
        return menu;
      }
      return value.category === product;
    }))
  }
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={()=>{filterProducts("all")}}>All</button>
          <button type="button" className="btn" onClick={()=>{filterProducts("breakfast");}}>Breakfast</button>
          <button type="button" className="btn" onClick={()=>{filterProducts("lunch");}}>Lunch</button>
          <button type="button" className="btn" onClick={()=>{filterProducts("shakes");}}>Shakes</button>
        </div>
        <List menu={data}/>


      </section>
    </main>
  );
};
export default App;
