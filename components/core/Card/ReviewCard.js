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
import Link from "next/link";

const ReviewCard = ({
  userReviews,
  allCasinos,
  description,
  date,
  name,
  email,
  image,
  pros,
  cons,
  website,
  userStatus,
}) => {
  
  if (userStatus === 1) {
    userStatus = "verified user";
  } else if (userStatus === 2) {
    userStatus = "unverified user";
  } else {
    userStatus = "pending user"
  }
  
  // const formattedDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });

  return (
    <>
      <div>
        {allCasinos && (
          <Card>
            <div className="flex px-4 pt-12">
              <div className="w-1/6 mr-4 max-w-[150px]">
                <Link href={website} target="_blank">
                  <img
                    src={image}
                    style={{ cursor: "pointer" }}
                    alt="casino logo"
                  ></img>
                </Link>
              </div>
              <div className="w-4/5">
                <UserName>{name}</UserName>
                <UserEmail>{email}</UserEmail>
                <div className="flex items-center gap-5 mt-3">
                  <Date>{date}</Date>
                  {/* <CardBadge>{userStatus}</CardBadge> */}
                </div>
                <div className="gap-8 mt-3">
                  <Content>{description}</Content>
                  <br />
                  <br />
                  {/* <Content>➕{pros}</Content>
                  <Content>➖{cons}</Content> */}
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
        )}
        {userReviews && (
          <Card>
            <div className="flex px-4 pt-12">
              <div className="w-1/6 mr-4 max-w-[150px]">
                {/* <img
                  src={image}
                  style={{ cursor: "pointer" }}
                  alt="casino logos"
                ></img> */}
              </div>
              <div className="w-4/5">
                <UserName>{name}</UserName>
                <UserEmail>{email}</UserEmail>
                <div className="flex items-center gap-5 mt-3">
                  <Date>{date}</Date>
                  <CardBadge>{userStatus}</CardBadge>
                </div>
                <div className="gap-8 mt-3">
                  <Content>{description}</Content>
                  <br />
                  <br />
                  <Content>➕{pros}</Content>
                  <Content>➖{cons}</Content>
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
        )}
      </div>
    </>
  );
};

export default ReviewCard;