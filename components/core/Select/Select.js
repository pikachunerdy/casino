import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaChevronDown } from "react-icons/fa";

const Select = (props) => {
  return (
    <>
      <Dropdown
        className="relative dark:!text-white1"
        controlClassName="dark:!bg-black1 !bg-white dark:!text-white1 !border-none dark:!border-solid dark:!border dark:!border-[#3d3d3d] !rounded-md !py-3 !px-4"
        placeholderClassName=""
        menuClassName="!mt-2 dark:!bg-black1 bg-white !border-none dark:!border-solid dark:!border dark:!border-[#3d3d3d] !rounded-md !py-3 !px-4 !absolute !w-full"
        arrowClassName="!mt-[6px]"
        arrowOpen={<FaChevronDown />}
        options={props.options}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Select;
