import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import ReviewCard from "../../components/core/Card/ReviewCard";
import { FaArrowRight, FaPen } from "react-icons/fa";
import Card1 from "public/image/ReviewCard.png";
import Search from "../../components/core/Search/Search";
import Rating from "../../components/core/Rating/Rating";
import Modal from "../../components/page/Review/Modal";
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
    { value: 5, label: 5, className: "py-[10px] pl-[14px]" },
    { value: 4, label: 4, className: "py-[10px] pl-[14px]" },
    { value: 3, label: 3, className: "py-[10px] pl-[14px]" },
    { value: 2, label: 2, className: "py-[10px] pl-[14px]" },
    { value: 1, label: 1, className: "py-[10px] pl-[14px]" },
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
        <div className="my-14 w-full">
          <Search />
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
          {
            role: "custom",
            onClick: () => console.log("custom test"),
            toClose: true,
            classes:
              "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
            label: "Custom",
          },
          {
            role: "discard",
            toClose: true,
            classes:
              "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
            label: "Discard",
          },
          {
            role: "confirm",
            toClose: false,
            classes:
              "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
            label: "Confirm",
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
