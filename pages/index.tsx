import type { NextPage } from "next";
import Image from "next/image";
import { Container, Title, Content, SubTitle } from "./index.module";
import Layout from "../components/Layout";
import Button from "../components/core/Button/Button";
import FeaturedCasino from "../components/Home/FeaturedCasino";
import Back2 from "../public/background/Back2.png";

const Home: NextPage = () => {
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
        <div className="w-full">
          <SubTitle>
            Featured <span className="text-darkBlue">casino</span> of the week
          </SubTitle>
        </div>
        <div className="w-full pt-9">
          <FeaturedCasino img={Back2} title="Pinata Casino"></FeaturedCasino>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
