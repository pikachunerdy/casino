import Image from "next/image";

const Avatar = (props) => {
  return (
    <div className="w-8 h-8">
      <Image src={props.src} width={32} height={32} />
    </div>
  );
};

export default Avatar;
