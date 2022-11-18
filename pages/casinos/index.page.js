import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import ReviewCard from "../../components/core/Card/ReviewCard";
import { FaArrowRight, FaPen, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";
import Card1 from "public/image/ReviewCard.png";
import Search from "../../components/core/Search/Search";
import Rating from "../../components/core/Rating/Rating";
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
import { useContext } from "react";
import CasinoContext from "../../context/CasinoContext";

const Review = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { listData, setListData } = useContext(CasinoContext);
  const router = useRouter();

  const handleChange = () => {
    router.push("/review");
  };

  useEffect(() => {
    setIsOpen(isOpen);
    if (!isOpen) {
      document.documentElement.style.overflow = "auto";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  }, [isOpen]);

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

      <div className="flex mb-12">
        <div className="mt-16">
          {listData &&
            listData.map((reviewOne, index) => {
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
    </Layout>
  );
};

export default Review;
