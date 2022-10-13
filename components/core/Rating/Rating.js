import ReactStars from "react-rating-stars-component";

const Rating = (props) => {
  return (
    <div>
      <ReactStars
        count={5}
        onChange={() => {}}
        size={24}
        activeColor={props.activeColor}
        edit={false}
        value={props.value}
      ></ReactStars>
    </div>
  );
};

export default Rating;
