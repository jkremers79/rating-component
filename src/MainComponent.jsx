export function MainComponent({
  submitted,
  clickFn,
  setSelectedRating,
  selectedRating,
}) {
  return (
    <div className="wrapper">
      <main className="main-component">
        <h1>How did we do? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rating-buttons">
          <button
            className="rating-button"
            onClick={() => setSelectedRating(1)}
          >
            1
          </button>
          <button
            className="rating-button"
            onClick={() => setSelectedRating(2)}
          >
            2
          </button>
          <button
            className="rating-button"
            onClick={() => setSelectedRating(3)}
          >
            3
          </button>
          <button
            className="rating-button"
            onClick={() => setSelectedRating(4)}
          >
            4
          </button>
          <button
            className="rating-button"
            onClick={() => setSelectedRating(5)}
          >
            5
          </button>
        </div>
        <button
          className="submit-rating-button"
          onClick={() => clickFn(!submitted)}
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
}
