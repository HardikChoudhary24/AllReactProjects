import { useEffect, useState } from "react";
import Menu from "./Menu";
import Loading from "./Loading";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setJobData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="jobs-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Menu jobData={jobData} />
        </>
      )}
    </div>
  );
};
export default App;
