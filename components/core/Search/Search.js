import { SearchContainer, SearchInput } from "./Search.module";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <SearchContainer>
      <FaSearch style={{ color: "#667085" }} />
      <SearchInput placeholder="Search Casinos"></SearchInput>
    </SearchContainer>
  );
};

export default Search;
