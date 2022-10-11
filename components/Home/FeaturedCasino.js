import Image from "next/image";
import { FeatureTitle } from "./FeaturedCasino.module";

const FeaturedCasino = (props) => {
  return (
    <>
      <Image
        src={props.img}
        alt="Picture of the author"
        layout="responsive"
        sizes="(max-width: 768px) 90vw,
            (max-width: 1200px) 80vw,
            80vw"
      ></Image>
      <FeatureTitle>{props.title}</FeatureTitle>
    </>
  );
};

export default FeaturedCasino;
