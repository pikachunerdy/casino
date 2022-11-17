import React, { useContext, useEffect, useState } from "react";
export const ReviewsContext = React.createContext({});

export const ReviewProvider = ({ children }) => {
  const [reviewData, setReviewData] = useState([]);

  const getAllReviews = async () => {
    await fetch("http://127.0.0.1:8000/reviews/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  };

  useEffect(() => {
    getAllReviews();
  }, []);


  return (
    <ReviewsContext.Provider
      value={{ reviewData, setReviewData }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContext;
