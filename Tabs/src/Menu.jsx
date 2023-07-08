import { Btn } from "./Btn";
import React, { useState } from "react";
import Info from "./Info";
import {v4 as uuidv4} from 'uuid'


const Menu = ({ jobData }) => {
  const [activeBtn, setActiveBtn] = useState("recAGJfiU4CeaV0HL");

  const activateBtn = (id) => {
    setActiveBtn(id);
  };
  console.log(jobData);
  return (
    <>
      <div className="btn-container">
        {jobData.map((job,index) => {
          const id = uuidv4();
          return (
              <div key={id}>
                <Btn
                  jobId={job.id}
                  jobCompany={job.company}
                  activateBtn={activateBtn}
                  activeBtn={activeBtn}
                />
              </div>
          );
        })}
      </div>
      <Info jobData={jobData} activeBtn={activeBtn} />
    </>
  );
};

export default Menu;
