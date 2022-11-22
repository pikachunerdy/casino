import AccordionItem from "./AccordionItem";
const FAQ = (props) => {
  return (
    <div className="my-[64px] mx-auto justify-center min-w-[1007px] hidden md:block">
      <div className="font-bold text-[32px] leading-10 text-center">
        Frequently Asked Questions
      </div>
      <div className="mt-[32px] flex gap-x-6 justify-between">
        <div className="w-1/2 gap-1">
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
        <div className="w-1/2">
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
