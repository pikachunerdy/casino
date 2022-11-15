import { useMemo, useCallback, useEffect, useContext } from "react";
import Image from "next/image";
import {
  ContentName,
  HeaderName,
  ContentSiteName,
  CustomButton,
  FeatureContent,
  RatingContent,
  WebsiteContent,
} from "./HomeTable.module";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Avatar from "../../core/Avatar/Avatar";
import Rating from "../../core/Rating/Rating";
import People from "public/image/People.png";
import Button from "../../core/Button/Button";
import { ThemeContext } from "../../Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const HomeTable = ({
  isExpand,
  casino,
  website,
  top10casinos,
  landingPage,
  handleClick,
  image,
  slug,
}) => {
  // const { isExpand } = props;

  const router = useRouter()
  
  const tableHeader = {
    Name: "Name",
    Bonus: "Bonus",
    Feature: "Feature",
    Users: "Users",
    Rating: "Rating",
    Website: "Website",
  };

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

  useEffect(() => {
    console.log("theme is>", typeof theme);
  }, []);

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
                <Link href={`/gambling/${slug}`}>
                  <img src={image} width={70} />
                </Link>

                <td>bonus</td>
                <td>features</td>
                <td>users</td>
                <td>rating</td>
                <a href={website} target="_blank">
                  <Button label="Visit Casino" variant="model" />
                </a>
                <Link href={`/gambling/${slug}`}>
                  <Button label="Full Review" variant="" handleClick={() => router.push(`/gambling/${slug}`)} />
                </Link>
                {/* <Link href={`/gambling/${slug}`}>Read Full Review</Link> */}
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
