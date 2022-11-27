import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const AccordionItem = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="m-[16px] flex gap-[16px]">
        <div className="font-medium text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit?
        </div>
        <div className="w-[20px] my-auto text-[#6B7280]">
          <FaPlus onClick={toggleOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="m-[16px] mt-[8px] font-medium text-base text-[#6B7280]">
          This is some subtext which appears after expanding the accordian.
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
