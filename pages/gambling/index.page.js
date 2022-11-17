import { data } from "autoprefixer";
import HeaderName from "../../components/page/Home/HomeTable";
import HomeTable from "../../components/page/Home/HomeTable";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ReviewsContext from "../../context/ReviewsContext";
import {
  calculateCasinoAvgRating,
  getAllDataForOneCasino,
} from "../../helpers/AverageRatingFunction";

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/casinos/");
  const data = await response.json();

  return {
    props: {
      casinos: data,
    },
  };
}

const CasinoList = ({ casinos }) => {
  const { reviewData } = useContext(ReviewsContext);
  return (
    <Layout>
      <div>
        <ul className="my-[10rem]">
          {casinos.map((casino) => {
            const avergaeCasinoRating = calculateCasinoAvgRating(
              getAllDataForOneCasino(reviewData, casino.name)
            )[0].score;

            return (
              <li className="cursor-pointer">
                <HomeTable
                  top10casinos
                  slug={casino.slug}
                  image={casino.image}
                  casino={casino.name}
                  website={casino.website}
                  rating={avergaeCasinoRating}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default CasinoList;
