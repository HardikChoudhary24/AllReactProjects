import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh]= useState(false)
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const resp = await fetch(url);
        const fetchTours = await resp.json();
        setData(fetchTours);
        setIsLoading(false);
      };
      fetchData();
    }, 500);
  }, [refresh]);

  const reload = () => {
    setRefresh(true)
  };

  const deleteTour = (id)=>{
    setData(
      data.filter((tour) => {
        return tour.id !== id;
      })
    );
  }
  return isLoading ? (
    <main>
      <Loading />
    </main>
  ) : (
    <main>
      <h1 className="title ">Our Tours</h1>
      <div className="title-underline"></div>
      <Tours tourData={data} deleteTour={deleteTour} reload={reload}/>
    </main>
  );
};
export default App;
