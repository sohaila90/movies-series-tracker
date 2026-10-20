import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [selectedType, setSelectedType] = useState("movie");
  const [selectedStatus, setSelectedStatus] = useState("watching");
  const [selectedRating, setSelectedRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const ratingNumbers = [
    {
      ratingNumber: 1,
    },
    {
      ratingNumber: 2,
    },
    {
      ratingNumber: 3,
    },
    {
      ratingNumber: 4,
    },
    {
      ratingNumber: 5,
    },
  ];
  const listOfRatings = ratingNumbers.map((numbers) => (
    <RatingCard
      key={numbers.ratingNumber}
      ratingNumber={numbers.ratingNumber}
      selectedRating={selectedRating}
      setSelectedRating={setSelectedRating}
    />
  ));

  const [watchList, setWatchList] = useState([
    {
      id: 1, // Used in JSX as a key
      title: "Kairo 678",
      type: "movie",
      status: "not watched",
      rating: 0,
    },
    {
      id: 2, // Used in JSX as a key
      title: "Tuyoor el-Zalam",
      type: "movie",
      status: "not watched",
      rating: 0,
    },
    {
      id: 3, // Used in JSX as a key
      title: "El-Irhab wa el-Kabab",
      type: "movie",
      status: "not watched",
      rating: 0,
    },
    {
      id: 4, // Used in JSX as a key
      title: "El Nazer",
      type: "movie",
      status: "not watched",
      rating: 0,
    },
  ]);
  const length = watchList.length + 1;

  const listToAddMovies = {
    id: length,
    title: title,
    type: selectedType,
    status: selectedStatus,
    rating: selectedRating,
  };
  const listOfMovieCards = watchList.map((movie) => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      type={movie.type}
      status={movie.status}
      rating={movie.rating}
    />
  ));

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <>
      <h1 className="add-movie">Add the title of your movie</h1>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={AddMovie}>Add Movie</button>
      {title}
      {errorMessage}
      <div>
        <div>{listOfMovieCards}</div>
      </div>
      <h1>Choose the type</h1>
      <input
        type="radio"
        name="type"
        value="movie"
        checked={selectedType === "movie"}
        onChange={handleChange}
      />
      Movie
      <input
        type="radio"
        name="type"
        value="series"
        checked={selectedType === "series"}
        onChange={handleChange}
      />
      Series
      <label>
        Select status for the movie/series
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="not watched">Not Watched</option>
          <option value="watching">Watching</option>
          <option value="watched">Watched</option>
        </select>
      </label>
      <h3>The staus of your film/series is: {selectedStatus}</h3>
      <div>Rate your movie/series</div>
      <h2>You rated:{selectedRating}</h2>
      <div>{listOfRatings}</div>
    </>
  );
  function AddMovie() {
    if (title === "") {
      setErrorMessage("Please write a title");
      return;
    }
    setWatchList([...watchList, listToAddMovies]);
    setTitle("");
    setSelectedType("");
    setSelectedStatus("");
    setSelectedRating("");
  }
}
function MovieCard(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h2>Type: {props.type}</h2>
      <h2>Status: {props.status}</h2>
      <h2>Rating: {props.rating}</h2>
    </div>
  );
}

function RatingCard(props) {
  return (
    <div>
      <h2>{props.ratingNumber}</h2>
      <input
        type="radio"
        value={props.ratingNumber}
        checked={props.ratingNumber === props.selectedRating}
        onChange={(event) =>
          props.setSelectedRating(Number(event.target.value))
        }
      />
    </div>
  );
}

export default App;
