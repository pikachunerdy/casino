import React, { useState } from "react";
import Dropdown from "react-dropdown";

const Select = (props) => {
  return (
    <>
      <Dropdown
        className="relative"
        controlClassName="bg-[#1f1f1e] border-solid border border-[#3d3d3d] rounded-md py-3 px-4"
        placeholderClassName="opacity-60 placeholder:text-[#667085]"
        menuClassName="mt-2 bg-[#1f1f1e] border-solid border border-[#3d3d3d] rounded-md py-3 px-4 absolute w-full"
        options={props.options}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Select;
