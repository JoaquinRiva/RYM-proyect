import SearchBar from "./SearchBar";

function Nav({onSearch, randomize}) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;
