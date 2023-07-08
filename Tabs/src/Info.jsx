import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Info = ({ jobData, activeBtn }) => {
  const [showInfo, setShowInfo] = useState({});
  const job = jobData.filter((job) => job.id === activeBtn);
  useEffect(() => {
    setShowInfo(job[0]);
  }, [activeBtn]);
  //   console.log(showInfo)
  console.log(showInfo);
  return (
    <article className="job-info">
      <h3>{showInfo.title}</h3>
      <div className="job-company ">{showInfo.company}</div>
      <p className="job-date">{showInfo.dates}</p>
      {showInfo?.duties?.map((duty,index) => {
        return (
          <div className="job-desc" key={uuidv4()}>
            <div className="job-icon"></div>
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Info;
