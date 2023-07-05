import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const [activeId,setActiveId] = useState(null);

  const toggleQuestion =(id)=>{
    if(id===activeId){
      setActiveId(null);
    }
    else{
      setActiveId(id)
    }
  }
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <Questions
          data={data}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      </div>
    </main>
  );
};
export default App;
