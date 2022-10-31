import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaChevronDown } from "react-icons/fa";

const Select = (props) => {
  return (
    <>
      <Dropdown
        className="relative"
        controlClassName="!bg-[#1f1f1e] !text-white1 !border-solid !border !border-[#3d3d3d] !rounded-md !py-3 !px-4"
        placeholderClassName="!opacity-60 !placeholder:text-[#667085]"
        menuClassName="!mt-2 !bg-[#1f1f1e] !border-solid !border !border-[#3d3d3d] !rounded-md !py-3 !px-4 !absolute !w-full"
        arrowClassName="!mt-[6px]"
        arrowOpen={<FaChevronDown />}
        options={props.options}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Select;
