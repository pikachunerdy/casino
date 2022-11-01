import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BlogCard from "../../core/Card/BlogCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CardPaginate = (props) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + props.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(props.cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.cards.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage, props.cards]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.cards.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {currentItems &&
          currentItems.map((card, i) => {
            return (
              <div key={i}>
                <BlogCard
                  cardImage={card.img}
                  date={card.date}
                  title={card.title}
                  content={card.content}
                  states={card.siteStates}
                ></BlogCard>
              </div>
            );
          })}
      </div>
      <div className="mx-auto mt-[70px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FaArrowRight className="text-blue1" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel={<FaArrowLeft className="text-blue1" />}
          renderOnZeroPageCount={null}
          className="flex items-center justify-center gap-3"
          pageClassName="p-3 px-5 rounded-full"
          activeClassName="dark:bg-blue1 bg-blue3"
        />
      </div>
    </div>
  );
};

CardPaginate.getInitialProps = () => {
  const blogData = [
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
  ];
  return blogData;
};

export default CardPaginate;
