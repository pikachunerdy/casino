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
import {
  allNegativeReviewOptions,
  casinoGameOptions,
  ratingOptions,
  topReviewOptions,
  verifiedReviewOptions,
} from "../../helpers/DropdownData";

const Review = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [listData, setListData] = useState([]);

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
          {listData.map((reviewOne, index) => {
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

export default Review;
