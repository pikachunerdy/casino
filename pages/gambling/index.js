import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import RatingCard from "../../components/core/Card/RatingCard";
import ReviewCard from "../../components/core/Card/ReviewCard";
import { FaArrowRight } from "react-icons/fa";
import Card1 from "../../public/image/Blog1.png";

import {
  HomeContainer,
  Container,
  PageTitle,
  ContentTitle,
  CardContainer,
  ProsText,
  ConsText,
  CardContent,
  SummaryCard,
  AboutTitle,
  ReviewTitle,
  ReviewContent,
  CryptoCard,
} from "./index.module";

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

      <div className="flex w-full gap-8">
        <div className="w-[25%]">
          <SummaryCard>
            <div className="pb-14">
              <ReviewTitle>Established</ReviewTitle>
              <ReviewContent>2003</ReviewContent>
            </div>
            <div className="pb-14">
              <ReviewTitle>Casino Rewards</ReviewTitle>
              <ReviewContent>Over 12k</ReviewContent>
            </div>
            <div className="pb-14">
              <ReviewTitle>Withdrawal Limits</ReviewTitle>
              <div className="flex gap-[46px]">
                <div className="flex flex-col">
                  <ReviewContent>Per month</ReviewContent>
                  <ReviewContent>$$$</ReviewContent>
                </div>
                <div className="flex flex-col">
                  <ReviewContent>Per week</ReviewContent>
                  <ReviewContent>$$$</ReviewContent>
                </div>
              </div>
            </div>
            <div className="pb-14">
              <ReviewTitle>Licensing Authorities</ReviewTitle>
              <ReviewContent>United Kingdom (UKGC)</ReviewContent>
            </div>
            <div className="pb-14">
              <ReviewTitle>Avaialble Languages</ReviewTitle>
              <ReviewContent>English (Flag)</ReviewContent>
            </div>
          </SummaryCard>
        </div>
        <div className="w-[75%]">
          <CryptoCard>
            <ReviewTitle>Accepted Cryptos</ReviewTitle>
            <ReviewTitle>Payable Games</ReviewTitle>
          </CryptoCard>
        </div>
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
