import { FaArrowRight } from "react-icons/fa";
import Button from "../../core/Button/Button";

const SinupContainer = (props) => {
  return (
    <div className="mt-[52px] mb-[72px] flex flex-col justify-center items-center bg-no-repeat bg-center dark:bg-[url('/background/Back3.png')] bg-[url('/background/Back6.png')] bg-cover rounded-[20px] h-[318px]">
      <div className="font-semibold text-[42px] text-center text-white1 max-w-[963px] mx-auto justify-center px-[40px]">
        Signup or login today and leave review at one of your favourite casinos
      </div>
      <div className="mt-[34px] text-center bg-white h-[50px] w-[168px] rounded-[25px] flex items-center text-[#1776F8] justify-center gap-[8px]">
        <div>Get Started</div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default SinupContainer;
