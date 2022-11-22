import { FaArrowRight } from "react-icons/fa";
import {
  getAllDataForOneCasino,
  calculateCasinoAvgRating,
} from "../../helpers/AverageRatingFunction";
import { useContext, useState, useEffect } from "react";
import * as React from "react";
import Back from "/public/background/Back5.png";
import Button from "../../components/core/Button/Button";
import Card1 from "public/image/ReviewCard.png";
import CasinoContext from "../../context/CasinoContext";
import Crypto from "../../components/page/Gambling/Crypto";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/page/Review/Modal";
import RatingCard from "../../components/core/Card/RatingCard";
import ReviewCard from "../../components/core/Card/ReviewCard";
import Select from "../../components/core/Select/Select";
import SwitchButton from "../../components/core/Button/SwitchButton";
import {
  CardContainer,
  CardContent,
  ConsText,
  Container,
  ContentTitle,
  HomeContainer,
  PageTitle,
  ProsText,
} from "./index.module";
import casinoGameOptions, {
  allNegativeReviewOptions,
  ratingOptions,
  topReviewOptions,
  verifiedReviewOptions,
} from "../../helpers/DropdownData";
import { useRouter } from "next/router";
import { test } from "gray-matter";

const tabs = ["Overview", "User Reviews"];

const Gambling = ({ casino }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const { setCasinoData, casinoData, listData } = useContext(CasinoContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
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

  useEffect(() => {
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
    getAllReviews();
  }, []);

  function getSpecificCasinoReviews(casinoData, casino_name) {
    const arrOfSpecificCasinoReviews = casinoData.filter((casinoReviews) => {
      if (casinoReviews.casino_name === casino.name) return casinoReviews;
    });
    return arrOfSpecificCasinoReviews;
  }
console.log('casino-test', casino)
  return (
    <Layout>
      <img src={casino.banner} alt="casino banner" className="bg-no-repeat bg-center bg-cover bg-fixed min-h-screen "/>
      <HomeContainer href={casino.banner}>
      
        <div className="ml-[5.5%]">
          <PageTitle>{casino.name}</PageTitle>
        </div>
        <div className="flex flex-col items-center mr-[5.5%] gap-[14px]">
          <a
            target="_blank"
            href={`${casino.website}`}
            className="cursor-pointer"
          >
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
          </a>
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
          <div className="flex gap-5 mt-12 w-full rounded-md overflow-hidden">
            <div className="w-[75%]">
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
            {casinoData.length > 0 &&
              calculateCasinoAvgRating(
                getAllDataForOneCasino(casinoData, `${casino.name}`)
              ).map((casino) => {
                return (
                  <div className="w-[25%]">
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
          <a
            target="_blank"
            href={`${casino.website}`}
            className="cursor-pointer"
          >
            <div className="mt-6">
              <Button label="Visit Casino" variant="model" className="mb-20">
                <div className="pl-1 pt-1">
                  <FaArrowRight />
                </div>
              </Button>
            </div>
          </a>
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
          {getSpecificCasinoReviews(casinoData, `${casino.name}`).map(
            (data, index) => {
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
            }
          )}

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
      ></Modal>
    </Layout>
  );
};

export default Gambling;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:8000/casinos/");
  const data = await response.json();

  const paths = data.map((casino) => {
    return {
      params: {
        casinoId: `${casino.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:8000/casinos/${params.casinoId}`
  );
  const data = await response.json();

 return {
    props: {
      casino: data,
    },
  };
}
