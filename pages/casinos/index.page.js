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

      <div className="flex mb-12">
        <div className="mt-16">
          {listData &&
            listData.map((data, index) => {
                return (
                <div key={index} className="w-full mt-7">
                  <ReviewCard
                    allCasinos
                    image={data.image}
                    user={data.user}
                    name={data.name}
                    website={data.website}
                    date={data.created_at}
                    description={data.description}
                    pros={data.pros}
                    cons={data.cons}
                    slug={data.slug}
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
