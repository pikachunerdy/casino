import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ThemeContext } from "../../Layout/Layout";
import { useMemo, useCallback, useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Avatar from "../../core/Avatar/Avatar";
import Button from "../../core/Button/Button";
import Image from "next/image";
import Link from "next/link";
import People from "public/image/People.png";
import Rating from "../../core/Rating/Rating";
import RatingCard from "../../core/Card/RatingCard";
import ReviewsContext from "../../../context/ReviewsContext";
import {
  calculateCasinoAvgRating,
  getAllDataForOneCasino,
} from "../../../helpers/AverageRatingFunction";
import {
  ContentName,
  ContentSiteName,
  CustomButton,
  FeatureContent,
  HeaderName,
  RatingContent,
  WebsiteContent,
} from "./HomeTable.module";

const HomeTable = ({
  isExpand,
  casino,
  website,
  top10casinos,
  landingPage,
  handleClick,
  image,
  slug,
  rating,
}) => {
  const router = useRouter();
  const tableHeader = {
    Name: "Name",
    Bonus: "Bonus",
    Feature: "Feature",
    Users: "Users",
    Rating: "Rating",
    Website: "Website",
  };
  const { reviewData } = useContext(ReviewsContext);
  const numCasinoReviews = getAllDataForOneCasino(reviewData, casino).length;

  return (
    <>
      <div className="">
        <table className="mt-4 dark:bg-black1 bg-white w-full">
          <thead>
            <tr>
              <HeaderName className="w-[20%]"></HeaderName>
              <HeaderName className="w-[10%]"></HeaderName>
              <HeaderName className="w-[15%]"></HeaderName>
              <HeaderName className="w-[25%]"></HeaderName>
              <HeaderName className="w-[20%]"></HeaderName>
              <HeaderName className="w-[20%]"></HeaderName>
            </tr>
          </thead>

          <tbody>
            <tr>
              <div className="flex flex-col content-center space-y-3 m-5 justify-center">
                <div className="text-xl">{casino}</div>
                <Link href={`/gambling/${slug}`} passHref>
                  <img src={image} className="rounded-md w-20 h-20" />
                </Link>
              </div>

              <td className="w-[10%]">bonus</td>
              <td className="w-[15%]">features</td>
              <td className="w-[25%]">users</td>

              <td>
                {reviewData.length > 0 &&
                  calculateCasinoAvgRating(reviewData).map((casino, index) => {
                    return (
                      <Rating
                        className="w-[20%]"
                        key={index}
                        value={rating}
                      ></Rating>
                    );
                  })}

                <div key={casino}>
                  (
                  {numCasinoReviews > 1
                    ? `${numCasinoReviews} reviews`
                    : `${numCasinoReviews} review`}
                  )
                </div>
              </td>
              <div className="">
                <div className="flex flex-col gap-3 w-full">
                  {top10casinos && (
                    <a href={website} target="_blank">
                      <Button label="Visit Casino" variant="model" width={30} />
                    </a>
                  )}

                  <Button
                    label="Full Review"
                    variant=""
                    handleClick={() => router.push(`/gambling/${slug}`)}
                  />
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeTable;
