import { CustomInput, CustomSelect, InputContainer } from "./index.module";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { ratingOptions } from "../../helpers/DropdownData";
import { useContext } from "react";
import { useState } from "react";
import * as React from "react";
import CasinoContext from "../../context/CasinoContext";
import Layout from "../../components/Layout/Layout";
import Rating from "../../components/core/Rating/Rating";
import { addUserReview } from "../../helpers/API/reviews";
import { v4 as uuidv4 } from 'uuid';

const Reviews = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [data, setData] = useState("");
  const [searchText, setSearchText] = useState("");
  const { listData } = useContext(CasinoContext);
  const [selectedImage, setSelectedImage] = useState();
  const [form, setForm] = useState({
    casino: "",
    cons: "",
    description: "",
    email: "",
    image: "",
    pros: "",
    score: "",
    title: "",
    username: "",
  });
  const handleUserInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const id = uuidv4()
  const timeAdded = new Date().toLocaleString();
  const handleClick = async (e) => {
    e.preventDefault();
    const review = {
      id: id,
      casino_name: form.casino,
      cons: form.cons,
      description: form.description,
      email: form.email,
      image: form.image,
      pros: form.pros,
      score: form.score,
      title: form.title,
      username: form.username,
      created_at: timeAdded
    };
   console.log(review)
    setForm({
      casino: "",
      cons: "",
      description: "",
      email: "",
      image: "",
      pros: "",
      score: "",
      title: "",
      username: "",
    });

    const newReview = await addUserReview(review);
  };

  const handleCasinoSearch = (e) => {
    setSearchText(e.target.value);
    setIsDisplayed(true);
  };

  const saveUserSelection = (casinoName) => {
    setForm({ ...form, ["casino"]: casinoName });
    setIsDisplayed(false);
    setSearchText(casinoName);

    
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      let newData = { ...data };
      newData["image"] = e.target.files[0];
      setForm({ ...form, ["image"]: newData });
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <Layout>
      <div className="mt-[100px]  mb-[102px] flex flex-col">
        <div className="mt-[64px] flex flex-col gap-4">
          <div className="font-bold text-[32px] leading-[40px]">
            Submit your casino review
          </div>
          <div className="font-semibold text-base">
            <span className="text-[#1676F8]">Sign up</span> or{" "}
            <span className="text-[#1676F8]">login</span> to manage your reviews
          </div>
        </div>
        <form className="mt-[64px] min-w-[696px] mr-[520px] flex flex-col gap-8">
          <label
            for="headline-input"
            className="block mb-2 text-xl font-medium"
          >
            FIND CASINO
          </label>
          <InputContainer>
            <FaSearch style={{ color: "#667085" }} />
            <CustomInput
              placeholder="Search Casinos"
              type="text"
              name="casino"
              onChange={(e) => handleCasinoSearch(e)}
              value={searchText}
            ></CustomInput>
          </InputContainer>

          {isDisplayed &&
            listData
              .filter((val) => {
                if (searchText == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <>
                    <div className="flex space-x-6 items-center cursor-pointer pl-11 hover:bg-slate-200 text-xl">
                      <img src={val.image} width={40}></img>
                      <div
                        value={val.name}
                        onClick={() => saveUserSelection(val.name)}
                      >
                        {val.name}
                      </div>
                    </div>
                  </>
                );
              })}
          <div>
            <label
              for="headline-input"
              className="block mb-2 text-xl font-medium"
            >
              TITLE
            </label>
            <InputContainer>
              <CustomInput
                type="text"
                name="title"
                onChange={handleUserInput}
                value={form.title}
                placeholder="Review Title"
                className="block w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              ></CustomInput>
            </InputContainer>
          </div>
          <div className="flex gap-6 mt-6">
            <InputContainer className="w-1/2">
              <CustomInput
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={handleUserInput}
                type="text"
              ></CustomInput>
            </InputContainer>
            <InputContainer className="w-1/2">
              <CustomInput
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleUserInput}
                type="text"
              ></CustomInput>
            </InputContainer>
          </div>

          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
              for="add_image"
            >
              ADD IMAGES
            </label>

            <>
              {!selectedImage && (
                <input
                  type="file"
                  name="image"
                  accept="image/jpeg,image/png,image/gif"
                  onChange={handleImageChange}
                />
              )}

              {selectedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Uploaded Image"
                    width={250}
                  />
                  <button onClick={removeSelectedImage}>
                    Remove This Image
                  </button>
                </div>
              )}
            </>
          </div>
          <div>
            <div className="text-xl font-medium text-gray-700 dark:text-white">
              RATING
            </div>
            <InputContainer className="w-1/2">
              <CustomSelect
                name="score"
                id="score"
                placeholder="Select your casino rating"
                onChange={handleUserInput}
              >
                {ratingOptions.map((data, index) => (
                  <option value={data.value}>{data.label}</option>
                ))}
              </CustomSelect>
              <hr className="bg-gray-500 border-none h-[1px]" />
            </InputContainer>
          </div>

          <div>
            <label
              for="review"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              YOUR REVIEW
            </label>
            <textarea
              value={form.description}
              onChange={handleUserInput}
              name="description"
              id="review"
              rows="4"
              className="block w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              placeholder="Leave your review here"
            ></textarea>
          </div>

          
          <div>
            <label
              for="headline-input"
              className="block mb-2 text-xl font-medium"
            >
              ADD A POSITIVE
            </label>
            <InputContainer className="w-1/2">
              <CustomInput
                name="pros"
                type="text"
                id="positive"
                placeholder="Leave a positive comment"
                onChange={handleUserInput}
                value={form.pros}
                className="block w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              ></CustomInput>
            </InputContainer>
          </div>
          <div>
            <label
              for="headline-input"
              className="block mb-2 text-xl font-medium"
            >
              ADD A NEGATIVE
            </label>
            <InputContainer className="w-1/2">
              <CustomInput
                onChange={handleUserInput}
                value={form.cons}
                name="cons"
                type="text"
                id="negative"
                placeholder="Leave a negative comment"
                className="block w-full text-gray-900 border-b-2 border-gray-400 sm:text-md dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
              ></CustomInput>
            </InputContainer>
          </div>
          {/* <ProsAndCons /> */}
          <button
            onClick={handleClick}
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
