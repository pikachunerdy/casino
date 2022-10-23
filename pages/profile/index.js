import Layout from "../../components/Layout/Layout";
import Avatar from "../../components/core/Avatar/Avatar";
import SwitchButton from "../../components/core/Button/SwitchButton";
import ReviewCard from "../../components/core/Card/ReviewCard";
import {
  ProfileTitle,
  ProfileSubTitle,
  ProfileContent,
  Title,
} from "./index.module";
import Button from "../../components/core/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import Card1 from "public/image/ReviewCard.png";

const Profile = () => {
  const userData = {
    Avatar: "",
    name: "Ahmedhssn",
    birth: "22/07/2000",
    creationDate: "21 Sep 2022",
    email: "Example@gmail.com",
    phoneNumber: "+92 1234867890",
  };

  return (
    <Layout>
      <div className="mt-[100px] flex flex-col divide-y-2">
        <div>
          <ProfileTitle>Personal Profile</ProfileTitle>
        </div>
        <div>
          <div className="flex gap-3 mt-6">
            <Avatar src={userData.Avatar}></Avatar>
            <ProfileContent>{userData.name}</ProfileContent>
          </div>
          <div className="flex gap-[242px] mt-6">
            <ProfileSubTitle>Date of birth</ProfileSubTitle>
            <ProfileContent>{userData.birth}</ProfileContent>
          </div>
          <div className="flex gap-[242px] mt-9">
            <ProfileSubTitle>Member since</ProfileSubTitle>
            <ProfileContent>{userData.creationDate}</ProfileContent>
          </div>
          <div className="flex gap-[242px] mt-7">
            <ProfileSubTitle>Email</ProfileSubTitle>
            <ProfileContent>{userData.email}</ProfileContent>
          </div>
          <div className="flex gap-[242px] mt-7">
            <ProfileSubTitle>Phone number</ProfileSubTitle>
            <ProfileContent>{userData.phoneNumber}</ProfileContent>
          </div>
        </div>
      </div>

      <div className="my-[115px]">
        <div className="flex justify-center">
          <SwitchButton
            firstLabel="Current Reviews"
            secondLabel="Pending Reviews"
            onClick={() => {}}
          ></SwitchButton>
        </div>
        <div className="mt-[10px]">
          <div className="flex">
            <Title>Current Reviews</Title>
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

        <div className="mt-[10px]">
          <div className="flex">
            <Title>Pendding Reviews</Title>
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
      </div>
    </Layout>
  );
};

export default Profile;
