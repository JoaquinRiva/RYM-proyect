export default function Card(props) {
  const {name, species, gender, image, onClose, id} = props;
  return (
    <div>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <h2>Name: {name}</h2>
      {/* <h2>Status:{status}</h2> */}
      <h2>Species: {species}</h2>
      {/* <h2>Origin:{origin}</h2> */}
      <h2>Gender: {gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
