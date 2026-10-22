export default function RatingCard(props) {
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
