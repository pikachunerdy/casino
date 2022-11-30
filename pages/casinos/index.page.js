import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import ReviewCard from "../../components/core/Card/ReviewCard";
import { FaArrowRight, FaPen, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";
import Card1 from "public/image/ReviewCard.png";
import Search from "../../components/core/Search/Search";
import Rating from "../../components/core/Rating/Rating";
import Modal from "../../components/page/Review/Modal";
import Select from "../../components/core/Select/Select";
import {
  Container,
  HomeContainer,
  PageTitle,
  PageContent,
} from "./index.module";

const Review = () => {
  const router = useRouter();
  const [listData, setListData] = useState([]);

  const handleChange = () => {
    router.push("/review");
  };

  const getAllCasinos = async () => {
    await fetch("http://127.0.0.1:8000/casinos/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setListData(data));
  };

  useEffect(() => {
    getAllCasinos();
  }, []);

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
          <img src="/background/Back4.png" width="100%" height="auto" />
        </div>
        <div className="flex absolute bottom-0 justify-between w-full mb-9">
          <div>
            <PageTitle>Reviewed Casinos</PageTitle>
            <PageContent>Leave a review today!</PageContent>
          </div>
          <div className="flex flex-col items-center mr-[5.5%] gap-[14px]">
            <Button
              className="px-[10x] sm:px-[107px]"
              label="Write A Review"
              handleClick={() => handleChange()}
              variant="model"
            >
              <div className="pl-1 pt-1">
                <FaPen />
              </div>
            </Button>
          </div>
        </div>
      </HomeContainer>

      <Container>
        <div className="mx-[54px] w-full">
          <Search />
        </div>
        <div className="md:flex justify-between gap-14 mt-[29px] w-full">
          <div className="md:w-1/4 mb-[20px]">
            <Select options={topReviewOptions} placeholder="Top Reviews" />
          </div>
          <div className="md:w-1/4 mb-[20px]">
            <Select
              options={verifiedReviewOptions}
              placeholder="Verified reviews only"
            />
          </div>
          <div className="md:w-1/4 mb-[20px]">
            <Select
              options={allNegativeReviewOptions}
              placeholder="All negative"
            />
          </div>
          <div className="md:w-1/4 mb-[20px]">
            <Select options={casinoGameOptions} placeholder="Casino games" />
          </div>
        </div>
      </Container>

      <div className="flex">
        <div className="mt-16">
          {listData.map((reviewOne, index) => {
            {
              /* {ReviewData.map((reviewOne, index) => { */
            }
            return (
              <div key={index} className="w-full mt-7">
                <ReviewCard
                  allCasinos
                  image={reviewOne.image}
                  user={reviewOne.user}
                  name={reviewOne.name}
                  website={reviewOne.website}
                  date={reviewOne.created_at}
                  description={reviewOne.description}
                  pros={reviewOne.pros}
                  cons={reviewOne.cons}
                  // casino={reviewOne.casino}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-12 pb-[110px] mx-auto">
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
    </Layout>
  );
};

export default Review;
