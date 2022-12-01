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
    // getAllReviews();
    const data = {
      id: 2,
      casino_name: "William Hill",
      status: 1,
      title: "William Hill Review",
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      created_at: "2022-11-08T16:36:23.384631Z",
      image: null,
      pros: {
        pro: "will hill pros1",
        pro1: "will hill pros2",
        "pro 3": "will hill pros3",
      },
      cons: {
        con: "will hill cons1",
        con1: "will hill cons2",
        con3: "will hill cons3",
      },
      score: "5.00",
      hash: "",
      network: "",
      user: 1,
      casino: "williamhill",
      up_vote: [3],
      down_vote: [],
    };
    setReviewData(data);
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviewData, setReviewData }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContext;
