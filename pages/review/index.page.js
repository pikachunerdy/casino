import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import ReviewCard from "../../components/core/Card/ReviewCard";
import { FaArrowRight, FaPen, FaChevronDown } from "react-icons/fa";
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
  let [isOpen, setIsOpen] = useState(false);

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

  const ReviewData = [
    {
      cardImage: Card1,
      user: "Verified user",
      name: "Black Jack",
      email: "@Ahmedhssn",
      date: "21 Sep 2022, 10:49 PM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna",
    },
    {
      cardImage: Card1,
      user: "Verified user",
      name: "Black Jack",
      email: "@Ahmedhssn",
      date: "21 Sep 2022, 10:49 PM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna",
    },
  ];

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
        <div className="ml-[5.5%]">
          <PageTitle>Reviewed Casinos</PageTitle>
          <PageContent>Leave a review today!</PageContent>
        </div>
        <div className="flex flex-col items-center mr-[5.5%] gap-[14px]">
          <Button
            label="Write A Review"
            handleClick={() => handleChange()}
            variant="model"
          >
            <div className="pl-1 pt-1">
              <FaPen />
            </div>
          </Button>
        </div>
      </HomeContainer>

      <Container>
        <div className="mx-[54px] w-full">
          <Search />
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
      </Container>

      <div className="flex">
        <div className="mt-16">
          {ReviewData.map((reviewOne, index) => {
            return (
              <div key={index} className="w-full mt-7">
                <ReviewCard
                  cardImage={reviewOne.cardImage}
                  user={reviewOne.user}
                  name={reviewOne.name}
                  email={reviewOne.email}
                  date={reviewOne.date}
                  content={reviewOne.content}
                ></ReviewCard>
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
              "bg-blue1 border border-transparent hover:bg-transparent hover:border-white w-fit py-2 px-5 rounded-3xl transition w-1/2 mx-auto",
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

export default Review;
