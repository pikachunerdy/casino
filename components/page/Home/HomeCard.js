import {
  CardTitle,
  CardContent,
  CardUserName,
  ReadMore,
} from "./HomeCard.module";
import Rating from "../../core/Rating/Rating";
import Avatar from "../../core/Avatar/Avatar";
import { useEffect, useState } from "react";
import DateHelper from "../../../helpers/DateHelper";

const HomeCard = (props) => {
  const { descriptionControl, content } = props;
  const [showMore, setShowMore] = useState(false);
  const descriptionControlAmount = content.slice(0, 175);

  return (
    <div className="mb-[2rem] w-[500px] min-h-[20rem] p-[50px] dark:bg-black1 bg-white cursor-pointer hover:scale-105 transition duration-300">
      <div className="flex gap-3 flex-col">
        <div className="flex gap-4">
          {/* <Avatar src={avatar} alt="avatar"></Avatar> */}
          <CardUserName>{props.user}</CardUserName>
        </div>
        <CardTitle>&quot;{props.title}&quot;</CardTitle>
        <CardTitle>
          <span className="text-blue3 text-sm">{DateHelper(props.date)}</span>
        </CardTitle>

        <div className="md:inline-block hidden">
          <Rating value={props.value} activeColor="#0492C2"></Rating>
        </div>
        <div className="md:hidden inline-block">
          <Rating value={props.value} activeColor="#FBB040"></Rating>
        </div>
      </div>
      {descriptionControl > 150 && descriptionControl === content.length ? (
        <div>
          {showMore ? (
            <CardContent>{content}</CardContent>
          ) : (
            <CardContent>{descriptionControlAmount}</CardContent>
          )}
          <ReadMore className="btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "read less" : "read more"}
          </ReadMore>
        </div>
      ) : (
        <CardContent>{content}</CardContent>
      )}
    </div>
  );
};

export default HomeCard;
