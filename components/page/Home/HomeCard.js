import { CardTitle, CardContent, CardUserName } from "./HomeCard.module";
import Rating from "../core/Rating/Rating";
import Avatar from "../core/Avatar/Avatar";

const HomeCard = (props) => {
  return (
    <div className="w-[500px] p-[50px] bg-black1">
      <div className="flex">
        <CardTitle>"{props.title}"</CardTitle>
        <Rating value={props.value} activeColor="#0492C2"></Rating>
      </div>
      <div>
        <CardContent>{props.content}</CardContent>
      </div>
      <div className="flex mt-8">
        <Avatar src={props.avatar}></Avatar>
        <CardUserName>{props.user}</CardUserName>
      </div>
    </div>
  );
};

export default HomeCard;
