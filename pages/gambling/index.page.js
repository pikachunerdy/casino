import { data } from "autoprefixer";
import HomeTable from "../../components/page/Home/HomeTable";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ReviewsContext from "../../context/ReviewsContext";
import {
  calculateCasinoAvgRating,
  getAllDataForOneCasino,
} from "../../helpers/AverageRatingFunction";
import HomeTableHeader from "../../components/page/Home/HomeTableHeader";

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/casinos/");
  const data = await response.json();

  return {
    props: {
      casinos: data,
    },
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  function getAllDataForOneCasino(casinoData, casino_name) {
    console.log('casino data ---->',casinoData)
    const arrOfSameCasinoRatings = casinoData.filter((casinoObj) => {
      if (casinoObj.casino_name === casino_name) return casinoObj;
    });

    return arrOfSameCasinoRatings;
  }

  function calculateCasinoAvgRating(arrCasinoObj) {
    //takes in arrayOfCasinoObjects
    const res = { up_vote: [], down_vote: [] };
    let numCasinoObj = 0; //could add a counter for each value

    arrCasinoObj.forEach((casinoObj) => {
      const { score, up_vote, down_vote } = casinoObj;
      if (score !== null || score !== undefined) {
        res.score === undefined ? (res.score = +score) : (res.score = +score);
        numCasinoObj++;
        
      
      }
      
      res.up_vote.push(up_vote);
      res.down_vote.push(down_vote);
    });

    res.up_vote.flat(3);
    res.down_vote.flat(3); // verify how many flat is needed

    const avgCasinoRatingObj = {
      score: Math.round(res.score / numCasinoObj),
      percent: Math.round((res.score / numCasinoObj / 5) * 100),
      // pos: up_vote.length,
      // neg: down_vote.length,
    };

const CasinoList = ({ casinos }) => {
  const { reviewData } = useContext(ReviewsContext);
  return (
    <Layout>
      <div className="p-10">
        <ul className="my-[8rem]">
          <HomeTableHeader />
          {casinos.map((casino, index) => {
            const avergaeCasinoRating = calculateCasinoAvgRating(
              getAllDataForOneCasino(reviewData, casino.name)
            )[0].score;

            return (
              <ul>
                <li className="cursor-pointer" key={index}>
                  <HomeTable
                    top10casinos
                    slug={casino.slug}
                    image={casino.image}
                    casino={casino.name}
                    website={casino.website}
                    rating={avergaeCasinoRating}
                  />
                </li>
              </ul>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default CasinoList;
