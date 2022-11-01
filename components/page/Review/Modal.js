import Image from "next/image";
import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "public/image/logo.svg";
import { FaSearch } from "react-icons/fa";
import Select from "../../core/Select/Select";
import { InputContainer, CustomInput, CustomSelect } from "./Modal.module";
import Rating1 from "public/image/Rating/Rating1.png";
import Rating2 from "public/image/Rating/Rating2.png";
import Rating3 from "public/image/Rating/Rating3.png";
import Rating4 from "public/image/Rating/Rating4.png";
import Rating5 from "public/image/Rating/Rating5.png";

const Modal = ({
  open,
  title = "",
  content = "",
  buttons = [],
  classes = "",
  onDiscard = "",
  onConfirm = "",
  handleChange,
  ratingOptions,
}) => {
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
    <>
      <Transition show={open}>
        <Transition.Child
          as={Fragment}
          enter="transition-all duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-200"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div
            style={{ zIndex: "1" }}
            onClick={() => handleChange()}
            className="w-full h-full left-0 top-0 dark:bg-black/50 bg-white fixed"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-all duration-200"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-200"
          leaveTo="opacity-0 scale-75"
          leaveFrom="opacity-100 scale-100"
        >
          <div
            style={{ zIndex: "2" }}
            className="flex justify-center items-center fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2"
          >
            <div
              className={`w-[600px] ${
                classes ? classes : "p-4 bg-dark dark:text-white1 rounded-lg"
              }`}
            >
              <div className="w-full flex flex-col justify-between items-center mb-6">
                <div className="w-full flex justify-between">
                  <Image
                    src={logo}
                    width={182}
                    alt="logo"
                    handleChange={24}
                  ></Image>
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
                      <rect
                        x={0}
                        y={0}
                        width={36}
                        height={36}
                        fillOpacity={0}
                      />
                    </svg>
                  </div>
                </div>

                <p className="font-semibold text-[32px] text-center leading-[82px]">
                  Submit Your{" "}
                  <span className="dark:text-blue1 text-blue3">Casino</span>{" "}
                  Review
                </p>
                <p className="font-medium text-[19px] text-center leading-[22px]">
                  <span className="dark:text-blue1 text-blue3">Sign up</span> or{" "}
                  <span className="dark:text-blue1 text-blue3">Login</span> to
                  be able to manage or edit your review
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
                </form>
              </div>
              <div className="mt-6 flex justify-end items-center gap-2">
                {buttons.map((button, index) => (
                  <button
                    onClick={() => {
                      if (button.role === "discard") {
                        onDiscard();
                      }
                      if (button.role === "confirm") {
                        onConfirm();
                      }
                      if (button.role === "custom") {
                        button.onClick();
                      }
                      if (button.toClose) {
                        handleChange();
                      }
                    }}
                    key={index}
                    className={button.classes}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Modal;
