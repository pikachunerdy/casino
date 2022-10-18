import { FormContainer, FormInput } from "./Subscribe.module";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";

const Subscribe = () => {
  return (
    <FormContainer>
      <FormInput placeholder="Your Email"></FormInput>
      <Button
        label="Subscribe"
        handleClick={() => {
          console.log("Visit Casino");
        }}
        variant="model"
      >
        <div className="pl-1 pt-1">
          <FaArrowRight />
        </div>
      </Button>
    </FormContainer>
  );
};

export default Subscribe;
