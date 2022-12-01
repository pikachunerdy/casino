import { FaArrowRight } from "react-icons/fa";
import { useContext, useEffect } from "react";
import * as React from "react";
import Avatar from "../../components/core/Avatar/Avatar";
import Button from "../../components/core/Button/Button";
import Card1 from "public/image/ReviewCard.png";
import Layout from "../../components/Layout/Layout";
import ReviewCard from "../../components/core/Card/ReviewCard";
import Select from "../../components/core/Select/Select";
import SwitchButton from "../../components/core/Button/SwitchButton";
import {
  ProfileContent,
  ProfileSubTitle,
  ProfileTitle,
  Title,
} from "./index.module";

const Profile = () => {
    const userData = {
    Avatar: "/image/avatar.svg",
    name: "Ahmedhssn",
    birth: "22/07/2000",
    creationDate: "21 Sep 2022",
    email: "Example@gmail.com",
    phoneNumber: "+92 1234867890",
  };

  const [currentTab, setCurrentTab] = React.useState(0);
   const sortOptions = [
    {
      value: "date",
      label: "Date",
      className: "dropdown-menu-option",
    },
    {
      value: "Popularity",
      label: "Popularity",
      className: "dropdown-menu-option",
    },
    {
      value: "Rating",
      label: "Rating",
      className: "dropdown-menu-option",
    },
  ];
  return (
    <Layout>
      <div className="mt-[100px] flex flex-col divide-y-2">
        <div>
          <ProfileTitle>Personal Profile</ProfileTitle>
        </div>
        <div>
          <div className="w-80">
            <div className="flex items-center gap-3 mt-6">
              <Avatar src={userData.Avatar}></Avatar>
              <ProfileContent>{userData.name}</ProfileContent>
            </div>
            <div className="flex justify-between mt-6">
              <ProfileSubTitle>Date of birth</ProfileSubTitle>
              <div className="w-40">
                <ProfileContent>{userData.birth}</ProfileContent>
              </div>
            </div>
            <div className="flex justify-between mt-9">
              <ProfileSubTitle>Member since</ProfileSubTitle>
              <div className="w-40">
                <ProfileContent>{userData.creationDate}</ProfileContent>
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <ProfileSubTitle>Email</ProfileSubTitle>
              <div className="w-40">
                <ProfileContent>{userData.email}</ProfileContent>
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <ProfileSubTitle>Phone number</ProfileSubTitle>
              <div className="w-40">
                <ProfileContent>{userData.phoneNumber}</ProfileContent>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[115px]">
        <div className="flex justify-center">
          <SwitchButton
            tabs={["Current Reviews", "Pending Reviews"]}
            currentTab={currentTab}
            handleClick={setCurrentTab}
          ></SwitchButton>
        </div>
        {currentTab === 0 && (
          <div className="mt-[10px]">
            <div className="flex justify-between">
              <Title>Current Reviews</Title>
              <div className="w-1/2 sm:w-1/5">
                <Select options={sortOptions} placeholder="Sort by" />
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <Button
                label="Show more"
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
        )}

        {currentTab === 1 && (
          <div className="mt-[10px]">
            <div className="flex">
              <Title>Pending Reviews</Title>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
              <div className="w-[49%] mt-[10px]">
                <ReviewCard
                  backgroundColor="bg-[#D92D20]/[.05]"
                  cardImage={Card1}
                  user="Verified user"
                  name="Black Jack"
                  email="@Ahmedhssn"
                  date="21 Sep 2022, 10:49 PM"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, lectus magna fringilla urna, lectus magna"
                ></ReviewCard>
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <Button
                label="Show more"
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
        )}
      </div>
    </Layout>
  );
};

export default Profile;
