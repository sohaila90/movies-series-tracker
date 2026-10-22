export default function MovieCard(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h2>Type: {props.type}</h2>
      <h2>Status: {props.status}</h2>
      <h2>Rating: {props.rating}</h2>
      <button onClick={() => props.DeleteMovie(props.movie)}>Delete</button>
    </div>
  );
}
