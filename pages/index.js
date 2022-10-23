import Image from "next/image";
import {
  Container,
  Title,
  Content,
  SubTitle,
  IconTitle,
  NewsSubTitle,
  HomeCard,
  HomeCardTitle,
  About,
  AboutTitle,
  AboutContent,
  SubscribeContainer,
} from "./index.module";
import Layout from "../components/Layout/Layout";
import Button from "../components/core/Button/Button";
import FeaturedCasino from "../components/page/Home/FeaturedCasino";
import Carousel from "../components/page/Home/Carousel";
import HomeTable from "../components/page/Home/HomeTable";
import BlogCard from "../components/core/Card/BlogCard";
import Badge from "../components/core/Badge/Badge";
import Subscribe from "../components/core/Subscribe/Subscribe";
import { FaArrowRight } from "react-icons/fa";
import Back2 from "public/background/Back2.png";
import Check from "public/Icon/Check.png";

const Home = () => {
  const cards = [
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "Tom",
      user: "Tomson",
    },
  ];

  const casinoData = [
    {
      name: "Stake Casino",
      site: "stake.com",
      amount: "2500",
      feature1: "Original bonus",
      feature2: "Weekly giveaways",
      users: "",
      value: "4.2",
      website: "stake.com",
    },
    {
      name: "Stake Casino",
      site: "stake.com",
      amount: "2500",
      feature1: "Original bonus",
      feature2: "Weekly giveaways",
      users: "",
      value: "4.2",
      website: "stake.com",
    },
    {
      name: "Stake Casino",
      site: "stake.com",
      amount: "2500",
      feature1: "Original bonus",
      feature2: "Weekly giveaways",
      users: "",
      value: "4.2",
      website: "stake.com",
    },
    {
      name: "Stake Casino",
      site: "stake.com",
      amount: "2500",
      feature1: "Original bonus",
      feature2: "Weekly giveaways",
      users: "",
      value: "4.2",
      website: "stake.com",
    },
  ];

  const siteStates = [
    {
      color: "purple",
      label: "Review",
    },
    {
      color: "blue2",
      label: "Casino",
    },
    {
      color: "pink",
      label: "Recent",
    },
  ];

  return (
    <Layout>
      <Container className="min-h-screen bg-[url('/background/Back1.svg')]">
        <Title>
          <span className="text-darkBlue">Real Players,</span> Real Money,
          Truste Reviews!
        </Title>
        <Content>
          Our algorithm guarantees players have played before leaving a review.
          Good or Bad!
        </Content>
        <div className="pt-9">
          <Button
            label="See Reviews"
            handleClick={() => {
              console.log("see reviews");
            }}
            variant="model"
          ></Button>
        </div>
      </Container>

      <Container>
        <div>
          <SubTitle>
            Featured <span className="text-darkBlue">Casino</span> Of The Week
          </SubTitle>
        </div>
        <div className="w-full pt-9">
          <FeaturedCasino
            img={Back2}
            title="Pinata Casino"
            value={4}
            reviews={76}
          ></FeaturedCasino>
        </div>
        <div className="w-full mt-11">
          <Carousel cards={cards}></Carousel>
        </div>
      </Container>

      <Container className="mt-28">
        <div>
          <SubTitle>
            Top <span className="text-darkBlue">Casinos</span> By Rating
          </SubTitle>
        </div>
        <div className="flex items-center mt-5">
          <Image src={Check} alt="check"></Image>
          <IconTitle className="ml-4">Instant payments</IconTitle>
          <div className="bg-darkWhite h-[1px] w-24 mr-4 ml-2"></div>
          <Image src={Check} alt="check"></Image>
          <IconTitle className="ml-4">Higher winnings</IconTitle>
          <div className="bg-darkWhite h-[1px] w-24 mr-4 ml-2"></div>
          <Image src={Check} alt="check"></Image>
          <IconTitle className="ml-4">Full transparency</IconTitle>
        </div>
        <div className="w-full">
          <div>
            <HomeTable casinoData={casinoData}></HomeTable>
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="model" label="Show More">
              <div className="pl-1 pt-1">
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-[195px]">
          <SubTitle>
            Featured <span className="text-darkBlue">Blogs</span> Of The Week
          </SubTitle>
        </div>
        <div>
          <NewsSubTitle>Today&apos;s news - most recent articles</NewsSubTitle>
        </div>
        <div className="flex gap-9 mt-9 w-full">
          <div className="w-3/5">
            <BlogCard
              cardImage={Back2}
              date="Disclosed • 20 Jan 2022"
              title="Are Crypto casinos safe?"
              content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam."
              states={siteStates}
            ></BlogCard>
          </div>
          <div className="flex flex-col w-2/5 gap-4">
            <HomeCard>
              <HomeCardTitle>Best Casino Games</HomeCardTitle>
              <div className="flex gap-1 mt-1">
                <Badge color="text-blue2" label="Casinos"></Badge>
                <Badge color="text-pink" label="London"></Badge>
              </div>
            </HomeCard>
            <HomeCard>
              <HomeCardTitle>Best Casino Games</HomeCardTitle>
              <div className="flex gap-1 mt-1">
                <Badge color="text-blue2" label="Casinos"></Badge>
                <Badge color="text-pink" label="London"></Badge>
              </div>
            </HomeCard>
            <HomeCard>
              <HomeCardTitle>Best Casino Games</HomeCardTitle>
              <div className="flex gap-1 mt-1">
                <Badge color="text-blue2" label="Casinos"></Badge>
                <Badge color="text-pink" label="London"></Badge>
              </div>
            </HomeCard>
            <HomeCard>
              <HomeCardTitle>Best Casino Games</HomeCardTitle>
              <div className="flex gap-1 mt-1">
                <Badge color="text-blue2" label="Casinos"></Badge>
                <Badge color="text-pink" label="London"></Badge>
              </div>
            </HomeCard>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="model" label="See All Stories">
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
        <div className="flex flox-col mt-[136px]">
          <About>
            <div className="w-full pb-11">
              <AboutTitle className="text-blue1">About Us!</AboutTitle>
            </div>
            <AboutContent>
              Our innovative algorithm guarantees genuine reviews. Using
              blockchain technology we offer a 100% accurate and trusted
              reviewing system. Our innovative algorithm guarantees genuine
              reviews. Using blockchain technology we offer a 100% accurate and
              trusted reviewing system. Our innovative algorithm guarantees
              genuine reviews. Using blockchain technology we offer a 100%
              accurate and trusted reviewing system.
            </AboutContent>
          </About>
        </div>
      </Container>

      <SubscribeContainer className="mt-16 mb-[133px]">
        <AboutTitle className="text-white1">
          Subscribe to our newsletter
        </AboutTitle>
        <div className="pt-14">
          <Subscribe></Subscribe>
        </div>
      </SubscribeContainer>
    </Layout>
  );
};

export default Home;
