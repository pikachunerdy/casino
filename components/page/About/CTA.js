import { FaArrowRight } from "react-icons/fa";
import Button from "../../core/Button/Button";

const CTA = (props) => {
  return (
    <div className="mt-[64px] mb-[71px] mx-auto justify-center max-w-[800px]">
      <div className="text-center font-bold text-4xl">About Us</div>
      <div className="mt-[24px] text-center text-lg">
        Using blockchain technology we offer a 100% accurate and trusted
        reviewing system. Our innovative algorithm guarantees genuine reviews.
        Using blockchain technology we offer a 100% accurate and trusted
        reviewing system.
      </div>
      <div className="mt-[40px] text-center">
        <Button
          label="Leave A Review"
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
  );
};

export default CTA;
