import Image from "next/image";
import { Card, Date, Title, Content, CardContent } from "./BlogCard.module";

import Badge from "../Badge/Badge";
import { useContext, useEffect } from "react";
import BlogsContext from "../../../context/BlogsContext";
import Link from "next/link";

export default function BlogCard({
  allPostsData,
  title,
  date,
  cardImage,
  intro,
  states,
  labels,
  labels1,
  featureBlog
}) {

    const { blogData } = useContext(BlogsContext);
     
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
            <Link href={`/blogs/${featureBlog.id}`}><div className="mt-3">
              <Title>{featureBlog.title}</Title>
              <Date>{featureBlog.date}</Date>
            </div></Link>
            <div className="mt-3">
              <Content>{featureBlog.intro}</Content>
            </div>
            <div className="flex mt-5 gap-1">
              {/* {states.map((state, i) => {
                return ( */}
                  <Badge
                    // key={i}
                    // color={state.color}
                    color="text-blue2"
                    label={featureBlog.label}
                  ></Badge>
                {/* );
              })} */}
            </div>
          </CardContent>
          
        </div>
      </Card>
    </>
  );
}
