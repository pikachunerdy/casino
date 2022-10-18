import { Wrapper } from "./Layout.module";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="dark">
      <Wrapper>
        <Header></Header>
        <div className="flex flex-col justify-center w-[90%]">{children}</div>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}
