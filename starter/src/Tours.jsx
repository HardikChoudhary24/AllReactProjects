import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tourData, deleteTour ,reload} = props;

  if (tourData.length === 0) {
    return (
      <main>
        <button type="button" className="btn" onClick={reload}>
          Reload
        </button>
      </main>
    );
  }
  return (
    <div className="tours">
      {tourData.map((tour) => {
        return <Tour tour={tour} deleteTour={deleteTour} />;
      })}
    </div>
  );
};

export default Tours;
