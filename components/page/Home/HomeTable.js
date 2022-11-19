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
  // const { isExpand } = props;

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
     
        <div className="dark:bg-black1 bg-white">
          <table className="mt-4">
            <thead>
              <tr>
                <HeaderName className="w-[20%]">{tableHeader.Name}</HeaderName>
                <HeaderName className="w-[10%]">{tableHeader.Bonus}</HeaderName>
                <HeaderName className="w-[15%]">
                  {tableHeader.Feature}
                </HeaderName>
                <HeaderName className="w-[25%]">{tableHeader.Users}</HeaderName>
                <HeaderName className="w-[20%]">
                  {tableHeader.Rating}
                </HeaderName>
                <HeaderName className="w-[20%]">
                  {tableHeader.Website}
                </HeaderName>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="flex flex-col content-center space-y-3 m-5 justify-center">
                  <td className="text-xl">{casino}</td>
                  <Link href={`/gambling/${slug}`}>
                    <img src={image} className="rounded-md w-20 h-20" />
                  </Link>
                </div>

                <td>bonus</td>
                <td>features</td>
                <td>users</td>

                <td>
                  {reviewData.length > 0 &&
                    calculateCasinoAvgRating(reviewData).map((casino) => {
                      console.log('what review data is this', reviewData)
                      return <Rating value={rating}></Rating>;
                    })}

                  <div key={casino}>
                    (
                    {numCasinoReviews > 1
                      ? `${numCasinoReviews} reviews`
                      : `${numCasinoReviews} review`}
                    )
                  </div>
                </td>
                <div className="flex flex-col gap-3">
                  <a href={website} target="_blank">
                    <Button label="Visit Casino" variant="model" width={30} />
                  </a>

                  <Link href={`/gambling/${slug}`}>
                    <Button
                      label="Full Review"
                      variant=""
                      handleClick={() => router.push(`/gambling/${slug}`)}
                    />
                  </Link>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
 
    </>
  );
};

export default HomeTable;
