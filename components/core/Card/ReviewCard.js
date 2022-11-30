import { FaArrowRight, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardBadge,
  CardBadge1,
  CardBadge2,
  Content,
  DateTest,
  UserEmail,
  UserName,
} from "./ReviewCard.module";
import Button from "../Button/Button";
import { useRouter } from "next/router";

const ReviewCard = ({
  allCasinos,
  cons,
  date,
  description,
  email,
  image,
  name,
  pros,
  title,
  userReviews,
  userStatus,
  website,
  slug
}) => {
  const router = useRouter();

  function userStatusUpdates() {
    if (userStatus === 1) {
      userStatus = "verified user";
    } else if (userStatus === 2) {
      userStatus = "unverified user";
    } else {
      userStatus = "verification pending";
    }
  }
  userStatusUpdates();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div>
        {allCasinos && (
          <Card>
            <div className="flex px-4 pt-12">
              <div className="w-1/6 mr-4 max-w-[150px]">
                <Link href={`/gambling/${slug}`} target="_blank" passHref>
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
                  <DateTest>{formattedDate}</DateTest>
                  <CardBadge>{userStatus}</CardBadge>
                </div>
                <div className="gap-8 mt-3">
                  <Content>{description}</Content>
                  <br />
                  <br />
                  {/* <Content>➕{pros}</Content>
                  <Content>➖{cons}</Content> */}
                </div>
              </div>
              <Button
                className="flex items-center h-full"
                label="See Reviews"
                variant="model"
                width={30}
                handleClick={() => router.push(`/gambling/${slug}`)}
              ></Button>
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
                {/* User Avatar will go here */}
              </div>
              <div className="w-4/5">
                <UserName>{name}</UserName>
                <UserEmail>{title}</UserEmail>
                <div className="flex items-center gap-5 mt-3">
                  <DateTest>{formattedDate}</DateTest>

                  {userStatus === "verified user" && (
                    <CardBadge>{userStatus}</CardBadge>
                  )}
                  {userStatus === "verification pending" && (
                    <CardBadge1>{userStatus}</CardBadge1>
                  )}
                  {userStatus === "unverified user" && (
                    <CardBadge2>{userStatus}</CardBadge2>
                  )}
                </div>

                <div className="gap-8 mt-3">
                  <Content>{description}</Content>
                  <br />
                  {pros.length > 0 &&
                    pros.map((pro, index) => {
                      return <Content key={index}>➕ {pro}</Content>;
                    })}
                  {cons.length > 0 &&
                    cons.map((con, index) => {
                      return (
                        <Content key={index} style={{ color: "red" }}>
                          ➖ {con}
                        </Content>
                      );
                    })}
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
