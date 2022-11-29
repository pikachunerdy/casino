import React from "react";
import TableHeaders, {
  HeaderName,
} from "../../../components/page/Home/HomeTable.module";

const HomeTableHeader = () => {

  return (
    <table className="mt-5 dark:bg-dark1 dark:border-dark2 border-2 dark:text-blue1 w-full ">
      <thead>
        <tr>
          <HeaderName className="w-[20%]">Name</HeaderName>
          <HeaderName className="w-[10%]">Bonus</HeaderName>
          <HeaderName className="w-[15%]">Feature</HeaderName>
          <HeaderName className="w-[25%]">Users</HeaderName>
          <HeaderName className="w-[20%]">Rating</HeaderName>
          <HeaderName className="w-[20%]">Website</HeaderName>
        </tr>
      </thead>
    </table>
  );
};

export default HomeTableHeader;
