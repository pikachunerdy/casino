import React from "react";
import TableHeaders, {
  HeaderName,
} from "../../../components/page/Home/HomeTable.module";

const HomeTableHeader = () => {
  const tableHeader = {
    Name: "Name",
    Bonus: "Bonus",
    Feature: "Feature",
    Users: "Users",
    Rating: "Rating",
    Website: "Website",
  };
  return (
    <div>
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
    </div>
  );
};

export default HomeTableHeader;
