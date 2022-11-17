import Image from "next/image";
import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Layout from "../../components/Layout/Layout";
import logo from "public/image/logo.svg";
import { FaSearch } from "react-icons/fa";
import Select from "../../components/core/Select/Select";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/core/Button/Button";
import { InputContainer, CustomInput, CustomSelect } from "./index.module";
import Rating1 from "public/image/Rating/Rating1.png";
import Rating2 from "public/image/Rating/Rating2.png";
import Rating3 from "public/image/Rating/Rating3.png";
import Rating4 from "public/image/Rating/Rating4.png";
import Rating5 from "public/image/Rating/Rating5.png";
import Negative from "public/icon/Negative.png";
import Positive from "public/icon/Positive.png";

const Review = ({}) => {
  const ratingOptions = [
    { value: 5, label: 5, className: "dropdown-menu-option" },
    { value: 4, label: 4, className: "dropdown-menu-option" },
    { value: 3, label: 3, className: "dropdown-menu-option" },
    { value: 2, label: 2, className: "dropdown-menu-option" },
    { value: 1, label: 1, className: "dropdown-menu-option" },
  ];
  const options = ratingOptions.map((rating, index) => {
    return {
      value: rating.value,
      label: (
        <Image
          src={`/image/Rating/Rating${rating.value}`}
          width={80}
          height={13}
          alt="rating"
        />
      ),
    };
  });

  return (
    <Layout>
      <div className="flex justify-center items-center my-32">
        <div className={`w-[600px] p-4 bg-dark dark:text-white1 rounded-lg`}>
          <div className="w-full flex flex-col justify-between items-center mb-6">
            <div className="w-full flex justify-between">
              <div
                onClick={() => handleChange()}
                className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 36 36"
                  version="1.1"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    className="clr-i-outline clr-i-outline-path-1"
                    d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"
                  />
                  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                </svg>
              </div>
            </div>

            <p className="font-semibold text-[32px] text-center leading-[82px]">
              Submit Your{" "}
              <span className="dark:text-blue1 text-blue3">Casino</span> Review
            </p>
            <p className="font-medium text-[19px] text-center leading-[22px]">
              <span className="dark:text-blue1 text-blue3">Sign up</span> or{" "}
              <span className="dark:text-blue1 text-blue3">Login</span> to be
              able to manage or edit your review
            </p>
          </div>
          <div className="text-md mt-[60px]">
            <form>
              <InputContainer>
                <FaSearch style={{ color: "#667085" }} />
                <CustomInput placeholder="Search Casinos"></CustomInput>
              </InputContainer>
              <div className="flex gap-6 mt-6">
                <InputContainer className="w-1/2">
                  <CustomInput placeholder="Username"></CustomInput>
                </InputContainer>
                <InputContainer className="w-1/2">
                  <CustomInput placeholder="Email"></CustomInput>
                </InputContainer>
              </div>
              <div className="mt-6">
                <Select options={ratingOptions} placeholder="Rating" />
              </div>
              <div className="mt-6 w-4/5 py-3 bg-black1 border border-solid border-[#3d3d3d] rounded-md px-4">
                <button className="w-full text-start" onClick={() => {}}>
                  Leave a negative review
                </button>
              </div>
              <div className="mt-6 w-4/5 py-3 bg-black1 border border-solid border-[#3d3d3d] rounded-md px-4">
                <button className="w-full text-start" onClick={() => {}}>
                  Leave a positive review
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <Button
              label="Submit your review"
              handleClick={() => {
                console.log("Visit Casino");
              }}
              variant="model"
            >
              <div className="pl-1 pt-1">
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
