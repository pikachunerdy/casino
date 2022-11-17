import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ThemeContext } from "../../Layout/Layout";
import { useMemo, useCallback, useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Avatar from "../../core/Avatar/Avatar";
import Button from "../../core/Button/Button";
import Image from "next/image";
import Link from "next/link";
import People from "public/image/People.png";
import Rating from "../../core/Rating/Rating";
import RatingCard from "../../core/Card/RatingCard";
import ReviewsContext from "../../../context/ReviewsContext";
import { calculateCasinoAvgRating } from "../../../helpers/AverageRatingFunction";
import {
  ContentName,
  ContentSiteName,
  CustomButton,
  FeatureContent,
  HeaderName,
  RatingContent,
  WebsiteContent,
} from "./HomeTable.module";

const HomeTable = ({
  isExpand,
  casino,
  website,
  top10casinos,
  landingPage,
  handleClick,
  image,
  slug,
  rating,
}) => {
  // const { isExpand } = props;

  const router = useRouter();

  const tableHeader = {
    Name: "Name",
    Bonus: "Bonus",
    Feature: "Feature",
    Users: "Users",
    Rating: "Rating",
    Website: "Website",
  };

  const { reviewData } = useContext(ReviewsContext);
  const [averageRating, setAverageRating] = useState();

  // const siteName = (name, site, src) => {
  //   return (
  //     <div className="flex px-6">
  //       <div className="mr-3">
  //         <Avatar src={src} />
  //       </div>
  //       <div>
  //         <ContentName>{name}</ContentName>
  //         <ContentSiteName>{site}</ContentSiteName>
  //       </div>
  //     </div>
  //   );
  // };

  // const bonus = useCallback(
  //   (amount) => {
  //     return (
  //       <div className="px-6">
  //         <CustomButton className="text-green1" onClick={handleClick}>
  //           <div className="flex">
  //             ${amount}
  //             <div className="pl-1 pt-1">
  //               <FaArrowRight />
  //             </div>
  //           </div>
  //         </CustomButton>
  //       </div>
  //     );
  //   },
  //   [handleClick]
  // );

  // const features = (feature1, feature2) => {
  //   return (
  //     <div className="px-6">
  //       <div className="flex items-end">
  //         <FaCheck className="text-blue1 mr-2" />
  //         <FeatureContent>{feature1}</FeatureContent>
  //       </div>
  //       <div className="flex items-end">
  //         <FaCheck className="text-blue1 mr-2" />
  //         <FeatureContent>{feature2}</FeatureContent>
  //       </div>
  //     </div>
  //   );
  // };

  // const users = () => {
  //   return (
  //     <div className="px-6">
  //       <Image src={People} alt="user image"></Image>
  //     </div>
  //   );
  // };

  // const rating = (value) => {
  //   return (
  //     <div className="flex items-center px-6">
  //       <Rating value={Math.floor(value)} activeColor="#0492C2"></Rating>
  //       <RatingContent className="ml-3">{value}/5</RatingContent>
  //     </div>
  //   );
  // };

  // const website = (url) => {
  //   return (
  //     <div className="group flex px-6 cursor-pointer">
  //       <a href={url}>
  //         <WebsiteContent>
  //           <span className="mr-3">Visit website</span>{" "}
  //           <div className="group-hover:translate-x-1 transition">
  //             <FaArrowRight />
  //           </div>
  //         </WebsiteContent>
  //       </a>
  //     </div>
  //   );
  // };

  // const TableData = useMemo(() => {
  //   let data = [];
  //   casinoData.map((row) => {
  //      data = [
  //       ...data,
  //       {
  //         siteName: siteName(row.name, row.site, row.src),
  //         bonus: bonus(row.amount),
  //         feature: features(row.feature1, row.feature2),
  //         users: users(),
  //         rating: rating(row.value),
  //         website: website(row.url),
  //       },
  //     ];
  //     console.log('what data do i receive? -->', data)
  //   });
  //   return data;
  // }, [casinoData, bonus]);

  return (
    <>
      {top10casinos && (
        <div className="dark:bg-black1 bg-white">
          <table className="mt-12">
            <thead>
              <tr>
                <HeaderName className="w-[20%]">{tableHeader.Name}</HeaderName>
                <HeaderName className="w-[10%]">{tableHeader.Bonus}</HeaderName>
                <HeaderName className="w-[15%]">
                  {tableHeader.Feature}
                </HeaderName>
                <HeaderName className="w-[25%]">{tableHeader.Users}</HeaderName>
                <HeaderName className="w-[20%]">
                  {tableHeader.Rating}
                </HeaderName>
                <HeaderName className="w-[20%]">
                  {tableHeader.Website}
                </HeaderName>
              </tr>
            </thead>
            <tbody>
              {/* {TableData.slice(0, isExpand ? TableData.length : 3).map((row, i) => { */}
              {/* return ( */}
              <tr>
                <div className="flex flex-col content-center space-y-3 m-5 justify-center">
                  <td className="text-xl">{casino}</td>
                  <Link href={`/gambling/${slug}`}>
                    <img src={image} className="rounded-md w-20 h-20" />
                  </Link>
                </div>

                <td>bonus</td>
                <td>features</td>
                <td>users</td>

                <td>
                  {reviewData.length > 0 &&
                    calculateCasinoAvgRating(reviewData).map((casino) => {
                      return <Rating value={rating}></Rating>;
                    })}
                </td>
                <div className="flex flex-col gap-3">
                  <a href={website} target="_blank">
                    <Button label="Visit Casino" variant="model" width={30} />
                  </a>
                  {/* </div>
                <div> */}
                  <Link href={`/gambling/${slug}`}>
                    <Button
                      label="Full Review"
                      variant=""
                      handleClick={() => router.push(`/gambling/${slug}`)}
                    />
                  </Link>
                </div>
              </tr>
              {/* ); */}
              {/* })} */}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default HomeTable;
