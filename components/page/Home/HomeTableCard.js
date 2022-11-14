const HomeTableCard = (props) => {
  return (
    <div className="p-6 dark:bg-black1 bg-white cursor-pointer hover:scale-105 transition duration-300 rounded-xl">
      <div>{props.siteName}</div>
      <div className="flex items-center mt-5">
        <div>{props.rating}</div>
        <div>{props.feature}</div>
      </div>
      <div className="mt-4">{props.website}</div>
    </div>
  );
};

export default HomeTableCard;
