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
}

const tableHeader = {
  Name: "Name",
  Bonus: "Bonus",
  Feature: "Feature",
  Users: "Users",
  Rating: "Rating",
  Website: "Website",
};

const CasinoList = ({ casinos }) => {
  const { reviewData } = useContext(ReviewsContext);
  return (
    <Layout>
      <div className="p-10">
        <ul className="my-[8rem]">
        <HomeTableHeader />
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
