import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import SwitchButton from "../../components/core/Button/SwitchButton";
import RatingCard from "../../components/core/Card/RatingCard";
import ReviewCard from "../../components/core/Card/ReviewCard";
import Crypto from "../../components/page/Gambling/Crypto";
import { FaArrowRight } from "react-icons/fa";
import Card1 from "public/image/ReviewCard.png";
import Select from "../../components/core/Select/Select";
import Modal from "../../components/page/Review/Modal";
import Back from "/public/background/Back5.png";

import {
  HomeContainer,
  Container,
  PageTitle,
  ContentTitle,
  CardContainer,
  ProsText,
  ConsText,
  CardContent,
} from "./index.module";

const tabs = ["Overview", "User Reviews"];

const Gambling = () => {
  const [casinoData, setCasinoData] = useState([]);
  const [currentTab, setCurrentTab] = React.useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = React.useState(1);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isOpen);
    if (!isOpen) {
      document.documentElement.style.overflow = "auto";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  }, [isOpen]);

  const getAllReviews = async () => {
    await fetch("http://127.0.0.1:8000/reviews/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCasinoData(data));
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  function getAllDataForOneCasino(casinoData, casino_name) {
    console.log("casino data ---->", casinoData);
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

    return [avgCasinoRatingObj];
  }

  const ratingOptions = [
    { value: 5, label: 5, className: "dropdown-menu-option" },
    { value: 4, label: 4, className: "dropdown-menu-option" },
    { value: 3, label: 3, className: "dropdown-menu-option" },
    { value: 2, label: 2, className: "dropdown-menu-option" },
    { value: 1, label: 1, className: "dropdown-menu-option" },
  ];

  const topReviewOptions = [
    {
      value: "TopReviews",
      label: "Top Reviews",
      className: "dropdown-menu-option",
    },
    {
      value: "MostRecent",
      label: "Most Recent",
      className: "dropdown-menu-option",
    },
  ];

  const verifiedReviewOptions = [
    {
      value: "AllReviews",
      label: "All Reviews",
      className: "dropdown-menu-option",
    },
    {
      value: "Verifiedreviewsonly",
      label: "Verified reviews only",
      className: "dropdown-menu-option",
    },
  ];

  const allNegativeReviewOptions = [
    {
      value: "5star",
      label: "5 star",
      className: "dropdown-menu-option",
    },
    {
      value: "4star",
      label: "4 star",
      className: "dropdown-menu-option",
    },
    {
      value: "3star",
      label: "3 star",
      className: "dropdown-menu-option",
    },
    {
      value: "2star",
      label: "2 star",
      className: "dropdown-menu-option",
    },
    {
      value: "1star",
      label: "1 star",
      className: "dropdown-menu-option",
    },
    {
      value: "AllStars",
      label: "All Stars",
      className: "dropdown-menu-option",
    },
    {
      value: "AllNegative",
      label: "All Negative",
      className: "dropdown-menu-option",
    },
  ];

  const casinoGameOptions = [
    {
      value: "Craps",
      label: "Craps",
      className: "dropdown-menu-option",
    },
    {
      value: "Slots",
      label: "Slots",
      className: "dropdown-menu-option",
    },
    {
      value: "Blackjack",
      label: "Black jack",
      className: "dropdown-menu-option",
    },
    {
      value: "Roulette",
      label: "Roulette",
      className: "dropdown-menu-option",
    },
    {
      value: "TexasHoldem",
      label: "Texas Holdem",
      className: "dropdown-menu-option",
    },
  ];

  return (
    <Layout>
      <HomeContainer>
        <div className="-translate-x-[5%] w-screen object-cover z-0">
          <img src="/background/Back5.png" width="100%" height="auto" />
        </div>
        <div className="flex absolute bottom-0 justify-between w-full mb-9">
          <div>
            <PageTitle>The Gambling Palace.</PageTitle>
          </div>
          <div className="flex flex-col items-center gap-[14px]">
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
            <a
              className="group flex cursor-pointer hover:text-blue1 transition"
              onClick={handleChange}
            >
              Write a review{" "}
              <div className="pl-1 pt-1 group-hover:text-blue1 group-hover:translate-x-1 transition">
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
      </HomeContainer>

      <div className="mt-[54px] mx-auto">
        <SwitchButton
          tabs={tabs}
          currentTab={currentTab}
          handleClick={setCurrentTab}
        />
      </div>

      {currentTab === 0 && (
        <Container>
          <div className="mt-[80px] w-full">
            <ContentTitle>Overview</ContentTitle>
          </div>
          <Crypto />
          <div className="md:flex gap-5 mt-12 w-full rounded-md overflow-hidden">
            <div className="md:w-[75%] mb-4 md:mb-0">
              <CardContainer className="h-full">
                <ProsText>Pros</ProsText>
                <CardContent>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </CardContent>
                <ConsText>Cons</ConsText>
                <CardContent>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </CardContent>
              </CardContainer>
            </div>
            {calculateCasinoAvgRating(
              getAllDataForOneCasino(casinoData, "Bet 365")
            ).map((casino) => {
              console.log("map test", casino.percent);
              return (
                <div className="md:w-[25%]">
                  <RatingCard
                    overview
                    score={casino.score}
                    percent={casino.percent}
                    pos={casino.pos}
                    neg={casino.neg}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Button
              label="Visit Casino"
              handleClick={() => {
                console.log("Visit Casino");
              }}
              variant="model"
              className="mb-20"
            >
              <div className="pl-1 pt-1">
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </Container>
      )}

      {currentTab === 1 && (
        <Container className="mb-24">
          <div className="mt-20 w-full">
            <ContentTitle>User reviews</ContentTitle>
          </div>
          <div className="flex justify-between gap-14 mt-[29px] w-full">
            <div className="w-1/4">
              <Select options={topReviewOptions} placeholder="Top Reviews" />
            </div>
            <div className="w-1/4">
              <Select
                options={verifiedReviewOptions}
                placeholder="Verified reviews only"
              />
            </div>
            <div className="w-1/4">
              <Select
                options={allNegativeReviewOptions}
                placeholder="All negative"
              />
            </div>
            <div className="w-1/4">
              <Select options={casinoGameOptions} placeholder="Casino games" />
            </div>
          </div>
          {casinoData.map((data, index) => {
            return (
              <div className="flex mt-12 gap-5 w-full rounded-md overflow-hidden">
                <div className="w-[75%]">
                  <ReviewCard
                    userReviews
                    // image={data.image}
                    // user="Verified user"/
                    name={data.casino_name}
                    email={data.website}
                    date={data.created_at}
                    description={data.description}
                    title={data.title}
                    pros={!data.pros ? "" : Object.values(data.pros)}
                    cons={!data.cons ? "" : Object.values(data.cons)}
                    userStatus={data.status}
                  />
                </div>
                <div className="w-[25%]">
                  <RatingCard score={data.score} userReviews />
                </div>
              </div>
            );
          })}

          <div className="mt-6">
            <Button
              label="Show more"
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
        </Container>
      )}
      <Modal
        open={isOpen}
        title={"Modal Title"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        onConfirm={() => console.log("Button confirm")}
        onDiscard={() => console.log("Button discard")}
        buttons={[
          // {
          //   role: "custom",
          //   onClick: () => console.log("custom test"),
          //   toClose: true,
          //   classes:
          //     "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
          //   label: "Custom",
          // },
          // {
          //   role: "discard",
          //   toClose: true,
          //   classes:
          //     "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
          //   label: "Discard",
          // },
          {
            role: "confirm",
            toClose: true,
            classes:
              "dark:bg-blue1 bg-blue3 border border-transparent hover:bg-transparent hover:border-white w-fit py-2 px-5 rounded-3xl transition w-1/2 mx-auto",
            label: "Submit Your Review",
          },
        ]}
        handleChange={handleChange}
        ratingOptions={ratingOptions}
      >
        <div>açmak için tıkla</div>
      </Modal>
    </Layout>
  );
};

export default Gambling;
