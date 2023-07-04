import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Review = ({ reviews,prev , next ,random}) => {
  const { id, name, job, image, text } = reviews;
  return (
    <div className="review" key={id}>
      <div className="img-container">
        <img src={image} alt="image" className="person-img " />
        <div className="quote-icon"></div>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prev}>
          <FcPrevious />
        </button>
        <button className="next-btn" onClick={next}>
          <FcNext />
        </button>
      </div>
      <button className="btn btn-hipster" onClick={random}>Surprise Me</button>
    </div>

  );
};

export default Review;
