import { FaArrowRight } from "react-icons/fa";
import Badge from "../../components/core/Badge/Badge";
import Blog1 from "public/image/Blog1.png";
import Button from "../../components/core/Button/Button";
import CardPaginate from "../../components/page/Blog/CardPaginate";
import Layout from "../../components/Layout/Layout";
import {
  AboutTitle,
  Container,
  ContentText,
  SubscribeContainer,
  SubTitle,
} from "./index.module";
import { useEffect, useState } from "react";
import { PageContent, PageTitle } from "../casinos/index.module";
import DateHelper from "../../helpers/DateHelper";

const Learn = ({ title }) => {
  const [blogList, setBloglist] = useState();
  const getAllBlogs = async () => {
    await fetch("http://127.0.0.1:8000/blogs/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBloglist(data));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const blogData = [
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "text-purple",
          label: "Review",
        },
        {
          color: "text-blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "text-purple",
          label: "Review",
        },
        {
          color: "text-blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "text-purple",
          label: "Review",
        },
        {
          color: "text-blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "text-purple",
          label: "Review",
        },
        {
          color: "text-blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "text-purple",
          label: "Review",
        },
        {
          color: "text-blue2",
          label: "Casino",
        },
      ],
    },
  ];

  return (
    <Layout>
      {blogList &&
        blogList.map((data) => {
          return (
            <div className="ml-[5.5%]">
              <PageTitle>{data.title}</PageTitle>
              <PageContent>
                <span className="dark:text-blue1 text-blue3">
                  Disclosed. {DateHelper(data.created_at)}
                </span>
              </PageContent>
            </div>
          );
        })}

      <Container>
        <img src="/background/Back4.png" width="100%" height="auto" />
      </Container>
      < className="ml-[35px] sm:ml-[117px] flex justify-left">
        <div className="w-[90%] sm:w-[70%] my-14">
          <div className="flex justify-start gap-2">
            <Badge color="text-purple" label="Casinos"></Badge>
            <Badge color="text-bue2" label="Crypto"></Badge>
            <Badge color="text-pink" label="Safe"></Badge>
          </div>
          <div className="mt-3">
            {blogList &&
              blogList.map((data) => (
                <ContentText>
                  {data.description}
                  <div className="dark:text-blue1 text-blue3 inline-flex cursor-pointer hover:scale-105 transition">
                    Real full article
                  </div>
                </ContentText>
              ))}
          </div>
        </div>
  

      {/* <Container>
        <div className="w-full">
          <SubTitle>Related blogs</SubTitle>
        </div>
        <div className="w-full mt-16">
          <CardPaginate cards={blogData} itemsPerPage="4"></CardPaginate>
        </div>
      </Container> */}

      <SubscribeContainer className="mt-16 mb-[133px]">
        <AboutTitle className="dark:text-white1 text-white max-w-[939px] w-[58%] mt-[63px]">
          Join today and leave a review at your favourite casinos!
        </AboutTitle>
        <div className="pt-9 mb-[75px]">
          <Button
            label="Get Started"
            handleClick={() => {
              console.log("Visit Casino");
            }}
            variant="model"
            className="!bg-white !text-blue1 hover:!bg-blue1 hover:!text-white1"
          >
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </SubscribeContainer>
    </Layout>
  );
};

export default Learn;
