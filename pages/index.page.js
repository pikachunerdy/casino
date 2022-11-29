import React, { useContext, useEffect, useState } from "react";
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
import TopCarousel from "../components/page/Home/TopCarousel";
import HomeTable from "../components/page/Home/HomeTable";
import BlogCard from "../components/core/Card/BlogCard";
import Badge from "../components/core/Badge/Badge";
import Subscribe from "../components/core/Subscribe/Subscribe";
import { FaArrowRight } from "react-icons/fa";
import Back2 from "public/background/Back2.png";
import Check from "public/Icon/Check.png";
import Avatar1 from "public/image/Avatar1.png";
import UserAvatar from "../components/core/Avatar/UserAvatar";
import Link from "next/link";
import CasinoContext from "../context/CasinoContext";
import ReviewsContext from "../context/ReviewsContext";
import {
  calculateCasinoAvgRating,
  getAllDataForOneCasino,
} from "../helpers/AverageRatingFunction";
import HomeTableHeader from "../components/page/Home/HomeTableHeader";
import { getSortedPostsData } from "../lib/posts";
import { Date } from "../components/core/Card/BlogCard.module";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const allPackagesData = getSortedPackagesData();

  return {
    props: {
      allPostsData,
      // allPackagesData,
    },
  };
}

const Home = ({ landingPage, allPostsData }) => {
  const { listData, casinoData } = useContext(CasinoContext);
  const { reviewData } = useContext(ReviewsContext);

  // const cards = [
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  //   {
  //     title: "The best",
  //     value: 4,
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  //     avatar: "/image/avatar.svg",
  //     user: "Tomson",
  //   },
  // ];

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

  // const blogCards = [
  //   {
  //     cardImage: Back2,
  //     date: "Disclosed • 20 Jan 2022",
  //     title: "Are Crypto casinos safe?",
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.",
  //     states: siteStates,
  //   },
  //   {
  //     cardImage: Back2,
  //     date: "Disclosed • 20 Jan 2022",
  //     title: "Are Crypto casinos safe?",
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.",
  //     states: siteStates,
  //   },
  //   {
  //     cardImage: Back2,
  //     date: "Disclosed • 20 Jan 2022",
  //     title: "Are Crypto casinos safe?",
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.",
  //     states: siteStates,
  //   },
  //   {
  //     cardImage: Back2,
  //     date: "Disclosed • 20 Jan 2022",
  //     title: "Are Crypto casinos safe?",
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.",
  //     states: siteStates,
  //   },
  // ];

  const router = useRouter();
  const [isExpand, setIsExpand] = React.useState(false);
  const featuredCasino = getAllDataForOneCasino(listData, listData.name);
  const numCasinoReviews = getAllDataForOneCasino(
    reviewData,
    reviewData.casino_name
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const mainPageFeatureCasino = featuredCasino[0];
  const featureBlog = allPostsData[1];

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
          <Link href="/casinos">
            <Button
              label="See Reviews"
              handleClick={() => {
                router.push("/gambling");
              }}
              variant="model"
            ></Button>
          </Link>
        </div>
      </Container>

      <Container>
        <div>
          <SubTitle>
            Featured <span className="dark:text-blue1 text-blue3">Casino</span>
            Of The Week
          </SubTitle>
        </div>
        <div>
          {mainPageFeatureCasino && (
            <Link href={`/gambling/${mainPageFeatureCasino.slug}`}>
              <div className="w-full pt-9 cursor-pointer">
                <FeaturedCasino
                  img={mainPageFeatureCasino.banner}
                  website={mainPageFeatureCasino.website}
                  casinoName={mainPageFeatureCasino.name}
                  value={4}
                  reviews={5}
                />
              </div>
            </Link>
          )}
        </div>
        <div className="w-full mt-11">
          <Carousel featured={mainPageFeatureCasino}></Carousel>
        </div>
      </Container>

      <Container className="mt-28">
        <div>
          <SubTitle>
            Top <span className="dark:text-blue1 text-blue3">Casinos</span> By
            Rating
          </SubTitle>
        </div>

        <div className="flex items-center mt-5 flex-wrap md:flex-nowrap">
          <div className="flex flex-row items-center w-1/2 md:w-1/3">
            <Image src={Check} alt="check"></Image>
            <IconTitle className="ml-4">Increased trust</IconTitle>
            <div className="bg-darkWhite h-[1px] hidden md:inline-block w-24 mr-4 ml-2"></div>
          </div>
          <div className="flex flex-row items-center w-1/2 md:w-1/3">
            <Image src={Check} alt="check"></Image>
            <IconTitle className="ml-4">Large community</IconTitle>
            <div className="bg-darkWhite h-[1px] hidden md:inline-block w-24 mr-4 ml-2"></div>
          </div>
          <div className="flex flex-row items-center justify-center mt-6 md:mt-0 w-full md:w-1/3">
            <Image src={Check} alt="check"></Image>
            <IconTitle className="ml-4">Full transparency</IconTitle>
          </div>
        </div>
        <div className="w-[80%]">
          <HomeTableHeader />
          {listData.slice(0, isExpand ? listData.length : 4).map((casino) => {
            const avergaeCasinoRating = calculateCasinoAvgRating(
              getAllDataForOneCasino(reviewData, casino.name)
            )[0].score;
            return (
              <HomeTable
                landingPage
                casinoData={listData}
                isExpand={isExpand}
                slug={casino.slug}
                image={casino.image}
                casino={casino.name}
                website={casino.website}
                rating={avergaeCasinoRating}
              />
            );
          })}
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

        <div className="p-5 flex">
          <div className="gap-9 border-[0.5rem] border-stone-600">
            <div className="w-[90%]">
              <BlogCard
                cardImage={Back2}
                allPostsData={allPostsData}
                featureBlog={featureBlog}
                states={siteStates}
              ></BlogCard>
            </div>
          </div>

          <div className="border-[0.6rem] border-yellow-500">
            <div className="flex flex-col basis-1/4 gap-4">
              {allPostsData.map((data, index) => {
                if (featureBlog.id !== data.id) {
                  return (
                    <div className="flex flex-col gap-4">
                      <Link href={`/blogs/${data.id}`}>
                        <HomeCard key={index}>
                          <HomeCardTitle className="hover:underline">
                            {data.title}
                          </HomeCardTitle>
                          <div className="flex space-x-3 mb-3 items-baseline">
                            <Date>{data.date}</Date>
                            <Badge
                              color="text-pink"
                              label={data.labels}
                            ></Badge>
                            <Badge
                              color="text-blue2"
                              label={data.labels1}
                            ></Badge>
                          </div>

                          <div className="flex gap-1 mt-1">{data.intro}</div>
                        </HomeCard>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="model"
            label="See All Stories"
            handleClick={() => router.push("/blogs")}
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
              We at diclosed understand the need for transparancy and trust when
              completing transactions online. Weve created a unique algorightm,
              that utilises blockchain technology to offer users at
              Dislcosed.com valuable insight and information of online casinos.
              Our highly innovative tech searches the blockchain and finds out
              whether a reviewer is credible in the review theyve left, offering
              credibility to a reveiw. Hopefully we aim to build a strong
              community where players feel safe, and can trust each other and
              the reviews theyve left. Improving the trust between casinos anc
              players alike.
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
