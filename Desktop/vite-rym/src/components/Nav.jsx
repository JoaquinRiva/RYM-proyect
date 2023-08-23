import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav({onSearch, randomize}) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
      <Link to={"/about"}>
        <button>About</button>
        </Link>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Nav;
