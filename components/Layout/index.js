import { Wrapper } from "./Layout.module";

export default function Layout({ children }) {
  return (
    <div className="dark">
      <Wrapper>
        <div className="w-[90%]">{children}</div>
      </Wrapper>
    </div>
  );
}
