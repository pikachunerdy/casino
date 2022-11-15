import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Card,
  StatusContainer,
  PosText,
  NegText,
  CardText,
} from "./RatingCard.module";
import Rating from "../Rating/Rating";
import { useEffect } from "react";

const RatingCard = ({
  percent,
  value,
  score,
  pos,
  neg,
  overview,
  userReviews,
}) => {
  let calculatedPercent = (score / 5) * 100;

  let newNumber;
  function controlDecimals() {
    newNumber = Math.round(score * 10) / 10;
  }
  controlDecimals();
  
  return (
    <Card>
      <div className="w-[35%]">
        {overview ? (
          <>
            <CircularProgressbar
              value={percent}
              text={`${score} / 5`}
              background
              styles={buildStyles({
                backgroundColor: "rgba(22, 118, 248, 0.08)",
                textColor: "#C9C9C9",
                pathColor: "#0492C2",
                trailColor: "transparent",
              })}
            />
            <div className="pt-9">
              <Rating value={score} activeColor="#0492C2" />
            </div>
          </>
        ) : (
          <>
            <CircularProgressbar
              value={calculatedPercent}
              text={`${newNumber} / 5`}
              background
              styles={buildStyles({
                backgroundColor: "rgba(22, 118, 248, 0.08)",
                textColor: "#C9C9C9",
                pathColor: "#0492C2",
                trailColor: "transparent",
              })}
            />
            <div className="pt-9">
              <Rating value={score} activeColor="#0492C2" />
            </div>
          </>
        )}
      </div>

      {pos && (
        <div className="w-full">
          <StatusContainer>
            <div className="w-1/2">
              <CardText>Positive</CardText>
              <PosText>{pos}</PosText>
            </div>
            <div className="w-1 dark:bg-white bg-[#E5E5EA] h-7 mr-4"></div>
            <div className="w-1/2">
              <CardText>Negative</CardText>
              <NegText>{neg}</NegText>
            </div>
          </StatusContainer>
        </div>
      )}
    </Card>
  );
};

export default RatingCard;
