import {useNavigate} from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const {name, species, gender, image, onClose, id} = props;

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      {/* <Link to={`/detail/${id}`}>
      </Link> */}
      <h2>Name: {name}</h2>
      {/* <h2>Status:{status}</h2> */}
      <h2>Species: {species}</h2>
      {/* <h2>Origin:{origin}</h2> */}
      <h2>Gender: {gender}</h2>
      <img src={image} alt={name} onClick={navigateHandler} />
    </div>
  );
}
