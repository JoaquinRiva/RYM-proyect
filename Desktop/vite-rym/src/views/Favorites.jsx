import {connect} from "react-redux";
import Cards from "../components/Cards";

function Favorites({favorites}) {
  //useSelector
  return (
    <div>
      <Cards characters={favorites} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
