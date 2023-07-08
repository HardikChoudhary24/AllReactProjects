import React, { useId } from "react";
export function Btn({ jobId, jobCompany, activateBtn, activeBtn }) {
  return (
    <button
      className={activeBtn === jobId ? "job-btn active-btn" : "job-btn"}
      type="button"
      onClick={() => {
        activateBtn(jobId);
      }}
    >
      {jobCompany}
    </button>
  );
}
