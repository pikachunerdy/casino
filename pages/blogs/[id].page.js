import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AboutTitle, Container, ContentText } from "./index.module";
import { PageContent, PageTitle } from "../casinos/index.module";

// import TableOfContent from "../../components/Table of Contents/TableOContent";

export async function getStaticProps({ params }) {
    const blogPosts = await fetch("http://127.0.0.1:8000/blogs/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
      blogPosts,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, blogPosts }) {
  // const [tableOfContent, setTableOfContents] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const headingElementsText = [];
    headingElements.forEach((item) => {
      item.id = item.innerText.replace(/ /g, "").replace(".", " ");
      headingElementsText.push(item.innerText);
    });

    // setTableOfContents(headingElementsText);
  }, []);

  useEffect(() => {
    const iframeElement = Array.from(document.querySelectorAll("h6"));
    const parent = document.getElementById("post-data");
    const iframeElementText = [];
    const titlesArray = [];

    iframeElement.forEach((item) => {
      item.id = "iframe";

      titlesArray.push();
      const newItem = document.createElement("div");
      let newSrc = item.innerText.split(";");
      const src = newSrc[0];
      console.log("website src test? ==>", src);
      newItem.innerHTML = `<iframe
      key={index}
      width="560"
      height="315"
      src=${src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>`;
      parent.replaceChild(newItem, item);
    });
  }, []);

  const blogLengthControl = postData.contentHtml.length;
  useEffect(() => {
    console.log("blog POsts", blogPosts);
    console.log("post Data", blogLengthControl);
  }, []);

  return (
    <Layout>
      <Container className=" -mx-[5.5%] min-h-screen bg-[url('/background/Back4.png')]" />
      <div className="mx-auto mt-11 ">
        <PageContent>
          <span className="dark:text-blue1 text-blue3">
            <PageTitle>{postData.title}</PageTitle>
            Disclosed. {postData.date}
          </span>{" "}
        </PageContent>
      </div>

      <Container>
        <div className="w-[70%] my-14">
          <ContentText>
            <div
              className="gap-y-[3rem]"
              id="post-data"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />

            <div className="dark:text-blue1 text-blue3 inline-flex cursor-pointer hover:scale-105 transition ">
              {blogLengthControl > 3000 ? "Real full article" : ""}
            </div>
          </ContentText>

          <div className="mt-3"></div>
        </div>
      </Container>
    </Layout>
  );
}
