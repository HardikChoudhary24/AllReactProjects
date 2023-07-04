import React, { useState } from "react";

const Tour = (props) => {
  const { tour,deleteTour } = props;
  const {id,name,info,image,price} = tour
  const [about , setAbout] = useState(info.slice(0,105))

  const [infobtn,setInfobtn] = useState("Read More")

  const expand = ()=>{
    setAbout(info);
    setInfobtn("Show less")
  }
  const contract = ()=>{
    setAbout(info.slice(0, 105));
    setInfobtn("Read More");
  }


  return (
    <div className="single-tour" key={id}>
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p className="">
          {about} <span className="info-btn" onClick={infobtn==="Read More" ? expand : contract}>{infobtn}</span>
        </p>
        <button
          type="button"
          className=" btn btn-block delete-btn"
          onClick={() => {
            deleteTour(id);
          }}
        >
          Not Intrested
        </button>
      </div>
    </div>
  );

};

export default Tour;
