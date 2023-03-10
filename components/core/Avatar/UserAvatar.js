import Image from "next/image";
import Rating from "../Rating/Rating";
import { Container, Tooltip, TooltipText } from "./UserAvatar.module";

const UserAvatar = (props) => {
  return (
    <Container>
      <div className="opacity-50 hover:opacity-100 transition">
        <Image src={props.src} alt="userAvatar" width={67} height={67} />
      </div>
      {props.tooltip && (
        <Tooltip>
          <Rating value={props.value} activeColor="#0492C2"></Rating>
          <TooltipText>&quot;{props.tooltip}&quot;</TooltipText>
        </Tooltip>
      )}
    </Container>
  );
};

export default UserAvatar;
