import Image from "next/image";
import { Card, Date, Title, Content, CardContent } from "./BlogCard.module";

import Badge from "../Badge/Badge";
import { useContext, useEffect } from "react";
import BlogsContext from "../../../context/BlogsContext";
import Link from "next/link";

export default function BlogCardTest({
  allPostsData,
  title,
  date,
  cardImage,
  intro,
  states,
}) {

    const { blogData } = useContext(BlogsContext);
    const featureBlog = allPostsData[1];
    useEffect(() => {
        console.log('data test', featureBlog)
    }, [])
    return (
    <>
      <Card className="rounded-lg cursor-pointer overflow-hidden hover:scale-105 transition duration-300">
        <div className="flex flex-col">
          <div className="contents">
            <Image src={cardImage} alt="card image"></Image>
          </div>
          <CardContent>
            <div className="mt-6">
            </div>
            <div className="mt-3">
              <Link href={`/blogs/${featureBlog.id}`}><Title>{featureBlog.title}</Title></Link>
              <Date>{featureBlog.date}</Date>
            </div>
            <div className="mt-3">
              <Content>{featureBlog.intro}</Content>
            </div>
            <div className="flex mt-5 gap-1">
              {states.map((state, i) => {
                return (
                  <Badge
                    key={i}
                    color={state.color}
                    label={state.label}
                  ></Badge>
                );
              })}
            </div>
          </CardContent>
          ;
        </div>
      </Card>
    </>
  );
}
