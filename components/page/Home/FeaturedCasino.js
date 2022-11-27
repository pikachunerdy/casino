import * as React from "react";
import Image from "next/image";
import { FeatureTitle, ContentTitle } from "./FeaturedCasino.module";
import Rating from "../../core/Rating/Rating";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../core/Button/Button";

const FeaturedCasino = ({ img, casinoName, value, reviews, website }) => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className="relative">
      <img
        src={img}
        alt="Picture of the author"
        layout="responsive"
        sizes="(max-width: 768px) 90vw,
            (max-width: 1200px) 80vw,
            80vw"
        className="cursor-pointer"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      ></img>
      <div
         className={`hidden md:inline-block absolute left-0 bottom-0 pl-5 py-5 transition w-full dark:bg-black1 bg-white1 ${
          isShow ? "opacity-80" : "opacity-0"
        }`}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <FeatureTitle>{casinoName}</FeatureTitle>
        <div className="flex justify-between">
        <div className="flex items-center">
          <div className="hidden dark:inline-block">
            <Rating value={value} activeColor="#C9C9C9"></Rating>
          </div>
          <div className="dark:hidden inline-block">
            <Rating value={value} activeColor="#1676F8"></Rating>
          </div>
          <ContentTitle className="pl-5">
            {value}/5 based on {reviews}reviews
          </ContentTitle>
        </div>
        <div className="p-3">
          <a href={website} target="_blank">
          <Button
            label="See Reviews"
            variant="model"
          >
            <div className="pl-2 pt-1">
              <FaArrowRight />
            </div>
          </Button>

          </a>
        </div>
        </div>
      </div>

      <div className={`visible md:hidden pl-5 py-5 w-full`}>
        <FeatureTitle>{casinoName}</FeatureTitle>
        <div className="flex items-center">
          <div className="hidden dark:inline-block">
            <Rating value={value} activeColor="#C9C9C9"></Rating>
          </div>
          <div className="dark:hidden inline-block">
            <Rating value={value} activeColor="#1676F8"></Rating>
          </div>
          <ContentTitle className="pl-5">
            {value}/5 based on {reviews}reviews
          </ContentTitle>
        </div>
        <div className="pt-3">
          <Button
            label="Visit Casino"
            handleClick={() => {
              console.log("Visit Casino");
            }}
            variant="model"
          >
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCasino;
