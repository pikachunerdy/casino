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
import HomeTableCard from "./HomeTableCard";
import Badge from "../../core/Badge/Badge";
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
  casinoData,
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
  // const numCasinoReviews = getAllDataForOneCasino(reviewData, casino).length;
  const numCasinoReviews = 2;

  const siteName = (name, site, src, amount) => {
    return (
      <div className="flex px-6">
        <div className="mr-3">
          <Avatar src={src} />
        </div>
        <div>
          <ContentName>{name}</ContentName>
          <ContentSiteName className="hidden md:inline-block">
            {site}
          </ContentSiteName>
          <div className="flex md:hidden">
            <Badge color="text-green1" label={`$${amount}`} />
          </div>
        </div>
      </div>
    );
  };

  const bonus = () => {
    return (
      <div className="px-6">
        <CustomButton className="text-green1">
          <div className="flex">
            {2500}
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </div>
        </CustomButton>
      </div>
    );
  };

  const features = (feature1, feature2) => {
    return (
      <div className="px-6">
        <div className="flex items-end">
          <FaCheck className="text-blue1 mr-2" />
          <FeatureContent>{feature1}</FeatureContent>
        </div>
        <div className="flex items-end">
          <FaCheck className="text-blue1 mr-2" />
          <FeatureContent>{feature2}</FeatureContent>
        </div>
      </div>
    );
  };

  const users = () => {
    return (
      <div className="px-6">
        <Image src={People} alt="user image"></Image>
      </div>
    );
  };

  const rating_dom = (value) => {
    return (
      <div className="flex flex-col md:flex-row items-center px-6">
        <Rating value={Math.floor(value)} activeColor="#0492C2"></Rating>
        <RatingContent className="md:ml-3">{value}/5</RatingContent>
      </div>
    );
  };

  const website_dom = (url) => {
    return (
      <div className="group flex px-6 cursor-pointer">
        <a href={url}>
          <WebsiteContent>
            <span className="mr-3">Visit website</span>{" "}
            <div className="group-hover:translate-x-1 transition">
              <FaArrowRight />
            </div>
          </WebsiteContent>
        </a>
      </div>
    );
  };

  const tableData = useMemo(() => {
    let data = [];
    casinoData.map((row) => {
      data = [
        ...data,
        {
          siteName: siteName(row.name, row.website, row.image, 2500),
          bonus: bonus(3),
          feature: features("Orginal Bonuses", "Weekly giveaways"),
          users: users(),
          rating: rating_dom(2.5),
          website: website_dom(row.website),
        },
      ];
    });
    return data;
  }, [casinoData]);

  return (
    <>
      <div className="flex flex-col lg:hidden">
        {tableData.slice(0, isExpand ? tableData.length : 3).map((row, i) => {
          return (
            <div className="mt-3 mx-auto" key={i}>
              <HomeTableCard
                siteName={row.siteName}
                bonus={row.bonus}
                rating={row.rating}
                feature={row.feature}
                website={row.website}
              />
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block dark:bg-black1 bg-white">
        <table className="mt-12">
          <thead>
            <tr>
              <HeaderName className="w-[20%]">{tableHeader.Name}</HeaderName>
              <HeaderName className="w-[10%]">{tableHeader.Bonus}</HeaderName>
              <HeaderName className="w-[15%]">{tableHeader.Feature}</HeaderName>
              <HeaderName className="w-[25%]">{tableHeader.Users}</HeaderName>
              <HeaderName className="w-[20%]">{tableHeader.Rating}</HeaderName>
              <HeaderName className="w-[20%]">{tableHeader.Website}</HeaderName>
            </tr>
          </thead>
          <tbody>
            {tableData
              .slice(0, isExpand ? tableData.length : 3)
              .map((row, i) => {
                return (
                  <tr key={i}>
                    <td className="py-8">{row.siteName}</td>
                    <td>{row.bonus}</td>
                    <td>{row.feature}</td>
                    <td>{row.users}</td>
                    <td>{row.rating}</td>
                    <td>{row.website}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeTable;
