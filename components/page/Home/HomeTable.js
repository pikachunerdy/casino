import { useMemo } from "react";
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
import Avatar from "../core/Avatar/Avatar";
import Rating from "../core/Rating/Rating";
import People from "../../public/image/People.png";

const HomeTable = (props) => {
  const tableHeader = useMemo(() => {
    return {
      Name: "Name",
      Bonus: "Bonus",
      Feature: "Feature",
      Users: "Users",
      Rating: "Rating",
      Website: "Website",
    };
  }, []);

  const siteName = (name, site) => {
    return (
      <div className="flex px-6">
        <Avatar />
        <div>
          <ContentName>{name}</ContentName>
          <ContentSiteName>{site}</ContentSiteName>
        </div>
      </div>
    );
  };

  const bonus = (amount) => {
    return (
      <div className="px-6">
        <CustomButton className="text-green1" onClick={props.handleClick}>
          <div className="flex">
            ${amount}
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </div>
        </CustomButton>
      </div>
    );
  };

  const features = (feature1, feature2) => {
    return (
      <div className="px-6">
        <div className="flex items-end">
          <FaCheck className="text-blue1 mr-2" />
          <FeatureContent>{feature1}</FeatureContent>
        </div>
        <div className="flex items-end">
          <FaCheck className="text-blue1 mr-2" />
          <FeatureContent>{feature2}</FeatureContent>
        </div>
      </div>
    );
  };

  const users = () => {
    return (
      <div className="px-6">
        <Image src={People} alt="user image"></Image>
      </div>
    );
  };

  const rating = (value) => {
    return (
      <div className="flex items-center px-6">
        <Rating value={Math.floor(value)} activeColor="#0492C2"></Rating>
        <RatingContent className="ml-3">{value}/5</RatingContent>
      </div>
    );
  };

  const website = (url) => {
    return (
      <div className="flex px-6">
        <a href={url}>
          <WebsiteContent>
            <span className="mr-3">Visit website</span> <FaArrowRight />
          </WebsiteContent>
        </a>
      </div>
    );
  };

  const tableData = useMemo(() => {
    let data = [];
    props.casinoData.map((row) => {
      data = [
        ...data,
        {
          siteName: siteName(row.name, row.site),
          bonus: bonus(row.amount),
          feature: features(row.feature1, row.feature2),
          users: users(),
          rating: rating(row.value),
          website: website(row.url),
        },
      ];
    });
    return data;
  }, [props.casinoData]);

  return (
    <div className="bg-black1">
      <table className="mt-12">
        <thead>
          <tr>
            <HeaderName className="w-[20%]">{tableHeader.Name}</HeaderName>
            <HeaderName className="w-[10%]">{tableHeader.Bonus}</HeaderName>
            <HeaderName className="w-[15%]">{tableHeader.Feature}</HeaderName>
            <HeaderName className="w-[25%]">{tableHeader.Users}</HeaderName>
            <HeaderName className="w-[20%]">{tableHeader.Rating}</HeaderName>
            <HeaderName className="w-[20%]">{tableHeader.Website}</HeaderName>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => {
            return (
              <tr key={i}>
                <td className="py-4">{row.siteName}</td>
                <td>{row.bonus}</td>
                <td>{row.feature}</td>
                <td>{row.users}</td>
                <td>{row.rating}</td>
                <td>{row.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
