import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import SwitchButton from "../../components/core/Button/SwitchButton";
import RatingCard from "../../components/core/Card/RatingCard";
import ReviewCard from "../../components/core/Card/ReviewCard";
import Crypto from "../../components/page/Gambling/Crypto";
import { FaArrowRight } from "react-icons/fa";
import Card1 from "public/image/ReviewCard.png";

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
  return (
    <Layout>
      <HomeContainer>
        <div className="ml-[5.5%]">
          <PageTitle>The Gambling Palace.</PageTitle>
        </div>
        <div className="flex flex-col items-center mr-[5.5%] gap-[14px]">
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
          <a className="flex">
            Write a review{" "}
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </a>
        </div>
      </HomeContainer>

      <Crypto></Crypto>
      <div className="mt-[54px] mx-auto">
        <SwitchButton tabs={tabs} />
      </div>

      <Container>
        <div className="mt-[80px] w-full">
          <ContentTitle>Overview</ContentTitle>
        </div>
        <div className="flex mt-12 w-full gap-5">
          <div className="w-[75%]">
            <CardContainer>
              <ProsText>Pros</ProsText>
              <CardContent>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </CardContent>
              <ConsText>Cons</ConsText>
              <CardContent>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </CardContent>
            </CardContainer>
          </div>
          <div className="w-[25%]">
            <RatingCard value="4.9" percent="60" pos="2k" neg="20"></RatingCard>
          </div>
        </div>
        <div className="mt-6">
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
      </Container>

      <Container className="mb-24">
        <div className="mt-15 w-full">
          <ContentTitle>User reviews</ContentTitle>
        </div>
        <div className="flex mt-12 w-full gap-5">
          <div className="w-[75%]">
            <ReviewCard
              cardImage={Card1}
              user="Verified user"
              name="Black Jack"
              email="@Ahmedhssn"
              date="21 Sep 2022, 10:49 PM"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
            ></ReviewCard>
          </div>
          <div className="w-[25%]">
            <RatingCard value="4.9" percent="60"></RatingCard>
          </div>
        </div>
        <div className="flex mt-12 w-full gap-5">
          <div className="w-[75%]">
            <ReviewCard
              cardImage={Card1}
              user="Verified user"
              name="Black Jack"
              email="@Ahmedhssn"
              date="21 Sep 2022, 10:49 PM"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
            ></ReviewCard>
          </div>
          <div className="w-[25%]">
            <RatingCard value="4.9" percent="60"></RatingCard>
          </div>
        </div>
        <div className="flex mt-12 w-full gap-5">
          <div className="w-[75%]">
            <ReviewCard
              cardImage={Card1}
              user="Verified user"
              name="Black Jack"
              email="@Ahmedhssn"
              date="21 Sep 2022, 10:49 PM"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
            ></ReviewCard>
          </div>
          <div className="w-[25%]">
            <RatingCard value="4.9" percent="60"></RatingCard>
          </div>
        </div>
        <div className="flex mt-12 w-full gap-5">
          <div className="w-[75%]">
            <ReviewCard
              cardImage={Card1}
              user="Verified user"
              name="Black Jack"
              email="@Ahmedhssn"
              date="21 Sep 2022, 10:49 PM"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
            ></ReviewCard>
          </div>
          <div className="w-[25%]">
            <RatingCard value="4.9" percent="60"></RatingCard>
          </div>
        </div>
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
    </Layout>
  );
};

export default Gambling;
