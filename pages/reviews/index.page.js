import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Rating from "../../components/core/Rating/Rating";
import { FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <Layout>
      <div className="mt-[100px]  mb-[102px] flex flex-col">
        <div className="mt-[64px] flex flex-col gap-4">
          <div className="font-bold text-[32px] leading-[40px]">
            Submit your casino review
          </div>
          <div className="font-semibold text-base">
            <span className="text-[#1676F8]">Sign up</span> or{" "}
            <span className="text-[#1676F8]">login</span> to be able to manage
            or edit your review
          </div>
        </div>
        <form className="mt-[64px] min-w-[696px] mr-[520px] flex flex-col gap-8">
          <div>
            <label
              for="headline-input"
              className="block mb-2 text-sm font-medium"
            >
              Add a headline
            </label>
            <input
              type="text"
              id="headline-input"
              placeholder="What's most important to know?"
              className="block p-4 w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="name-input" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name-input"
              placeholder="Enter your name"
              className="block p-4 w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-700 dark:text-white">
              Rating
            </div>
            <Rating value={4.5} activeColor="#1676F8"></Rating>
            <hr className="bg-gray-500 border-none h-[1px]" />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="add_image"
            >
              Add images
            </label>
            <div className="w-[89px] h-[89px] border-dashed border-gray-700 border flex justify-center items-center">
              <div className="w-[18.95px] h-[18.95px] bg-[#1676F8] text-white flex justify-center items-center">
                +
              </div>
            </div>
          </div>
          <div>
            <label
              for="review"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add a written review
            </label>
            <textarea
              id="review"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What did you like or dislike?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[132px] h-[50px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[25px] text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
          >
            Submit <FaArrowRight className="ml-[4px]" />
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Reviews;
