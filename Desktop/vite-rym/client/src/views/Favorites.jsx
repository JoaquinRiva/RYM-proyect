// import {connect} from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import {sortById, filterByGender, reset} from "../redux/actions/actions";
import Cards from "../components/Cards";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function sortHandler(event) {
    dispatch(sortById(event.target.value));
  }

  function filterHandler(event) {
    dispatch(filterByGender(event.target.value));
  }

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div>
      <select placeholder="Gender" onChange={filterHandler}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select placeholder="Sort" onChange={sortHandler}>
        {["Ascendente", "Descendente"].map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </select>
      <button onClick={resetHandler}>RESET</button>
      <Cards characters={favorites} />
    </div>
  );
}

export default Favorites;

// const mapStateToProps = (state) => {
//   return {
//     favorites: state.favorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
