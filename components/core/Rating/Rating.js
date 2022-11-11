import ReactStars from "react-rating-stars-component";

const Rating = (props) => {
  return (
    <div>
      <div className="hidden md:inline-block">
        <ReactStars
          count={5}
          onChange={() => {}}
          size={24}
          activeColor={props.activeColor}
          edit={false}
          value={props.value}
        ></ReactStars>
      </div>
      <div className="inline-block md:hidden">
        <ReactStars
          count={5}
          onChange={() => {}}
          size={18}
          activeColor={props.activeColor}
          edit={false}
          value={props.value}
        ></ReactStars>
      </div>
    </div>
  );
};

export default Rating;
