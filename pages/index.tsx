import type { NextPage } from "next";
import Image from "next/image";
import { Container, Title, Content, SubTitle, IconTitle } from "./index.module";
import Layout from "../components/Layout";
import Button from "../components/core/Button/Button";
import FeaturedCasino from "../components/Home/FeaturedCasino";
import Carousel from "../components/Home/Carousel";
import Back2 from "../public/background/Back2.png";
import Check from "../public/Icon/Check.png";

const Home: NextPage = () => {
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
            name="See Reviews"
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
        <div className="w-full">
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
      </Container>
    </Layout>
  );
};

export default Home;
