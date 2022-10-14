import Image from "next/image";
import { Card, Date, Title, Content, CardContent } from "./BlogCard.module";

import Badge from "../Badge/Badge";

export default function BlogCard(props) {
  console.log(props);
  return (
    <Card>
      <div className="flex flex-col">
        <div className="w-full">
          <Image src={props.cardImage} alt="card image"></Image>
        </div>
        <CardContent>
          <div className="mt-6">
            <Date>{props.date}</Date>
          </div>
          <div className="mt-3">
            <Title>{props.title}</Title>
          </div>
          <div className="mt-3">
            <Content>{props.content}</Content>
          </div>
          <div className="flex mt-5 gap-1">
            {props.states.map((state, i) => {
              return (
                <Badge key={i} color={state.color} label={state.label}></Badge>
              );
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
