import Image from "next/image";
import {
  Card,
  Date,
  UserName,
  Content,
  UserEmail,
  CardBadge,
} from "./ReviewCard.module";
import { FaArrowRight, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const ReviewCard = (props) => {
  return (
    <Card>
      <div className="flex px-4 pt-12">
        <div className="w-1/5 mr-4">
          <Image src={props.cardImage} alt="card image"></Image>
        </div>
        <div className="w-4/5">
          <UserName>{props.name}</UserName>
          <UserEmail>{props.email}</UserEmail>
          <div className="flex items-center gap-5 mt-3">
            <Date>{props.date}</Date>
            {props.user && <CardBadge>{props.user}</CardBadge>}
          </div>
          <div className="gap-8 mt-3">
            <Content>{props.content}</Content>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full pr-8 gap-5 pb-5">
        <button className="flex items-center gap-2">
          <FaRegThumbsUp style={{ color: "#0492C2" }} />{" "}
          <span className="text-darkBlue">Helpful</span>
        </button>
        <button className="flex items-center gap-2">
          <FaRegThumbsDown style={{ color: "#C9C9C9" }} />{" "}
          <span className="text-white1">Not Helpful</span>
        </button>
      </div>
    </Card>
  );
};

export default ReviewCard;
