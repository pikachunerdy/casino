import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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
  AvatarContainer,
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
import Avatar1 from "public/image/Avatar1.png";
import UserAvatar from "../components/core/Avatar/UserAvatar";

const Home = ({landingPage}) => {
  const cards = [
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
    {
      title: "The best",
      value: 4,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      avatar: "/image/avatar.svg",
      user: "Tomson",
    },
  ];

  const casinoData = [
    {
      name: "Stake Casino",
      site: "stake.com",
      src: Avatar1,
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
      src: Avatar1,
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
      src: Avatar1,
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
      src: Avatar1,
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
      color: "text-purple",
      label: "Review",
    },
    {
      color: "text-blue2",
      label: "Casino",
    },
    {
      color: "text-pink",
      label: "Recent",
    },
  ];

  const router = useRouter();
  const [isExpand, setIsExpand] = React.useState(false);

  return (
    <Layout>
      <Container className="md:min-h-screen mt-36 md:mt-0">
        <AvatarContainer bottom="20%" left="10%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="The best website, with amazing selection of games"
          ></UserAvatar>
        </AvatarContainer>
        <AvatarContainer bottom="50%" left="10%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="200% bonus. Wow"
          ></UserAvatar>
        </AvatarContainer>
        <AvatarContainer bottom="78%" left="27%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="The best website"
          ></UserAvatar>
        </AvatarContainer>
        <AvatarContainer bottom="80%" left="60%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="My favourite online casino"
          ></UserAvatar>
        </AvatarContainer>
        <AvatarContainer bottom="60%" left="80%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="Great casino, superfast withdrawals"
          ></UserAvatar>
        </AvatarContainer>
        <AvatarContainer bottom="30%" left="80%">
          <UserAvatar
            src={Avatar1}
            value={4}
            tooltip="Incredible Casino"
          ></UserAvatar>
        </AvatarContainer>
        
        <Title>
          <span className="dark:text-blue1 text-blue3">Real Players,</span> Real
          Money, Trusted Reviews!
        </Title>
        <Content>
          Our unique algorithm guarantees whether reviewers have played.
          Offering Complete Transparency
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
            Featured <span className="dark:text-blue1 text-blue3">Casino</span>{" "}
            Of The Week
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
            Top <span className="dark:text-blue1 text-blue3">Casinos</span> By
            Rating
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
           <HomeTable landingPage casinoData={casinoData} isExpand={isExpand}></HomeTable>
          </div>
          <div className="mt-12 flex justify-center">
            <Button
              variant="model"
              label="Show More"
              handleClick={() => setIsExpand(true)}
            >
              <div className="pl-1 pt-1">
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-[195px]">
          <SubTitle>
            Featured <span className="dark:text-blue1 text-blue3">Blogs</span>{" "}
            Of The Week
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
          <Button
            variant="model"
            label="See All Stories"
            handleClick={() => router.push("/learn")}
          >
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
        <div className="flex flox-col mt-[116px]">
          <About>
            <div className="w-full">
              <AboutTitle className="dark:text-blue1 text-blue3">
                About Us!
              </AboutTitle>
            </div>
            <AboutContent>
              {/* Our innovative algorithm guarantees genuine reviews. Using
              blockchain technology we offer a 100% accurate and trusted
              reviewing system. Our innovative algorithm guarantees genuine
              reviews. Using blockchain technology we offer a 100% accurate and
              trusted reviewing system.
               */}
              We at diclosed understand the need for transparancy and trust when completing transactions online. Weve created a unique algorightm, that utilises blockchain technology to offer users at Dislcosed.com valuable insight and information of online casinos. 
              
              Our highly innovative tech searches the blockchain and finds out whether a reviewer is credible in the review theyve left, offering credibility to a reveiw. Hopefully we aim to build a strong community where players feel safe, and can trust each other and the reviews theyve left. Improving the trust between casinos anc players alike.
              
            </AboutContent>
            <Button label="Learn More">
              <div className="pl-1 pt-1">
                <FaArrowRight />
              </div>
            </Button>
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
