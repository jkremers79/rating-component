export function MainComponent({
  submitted,
  clickFn,
  setSelectedRating,
  selectedRating,
}) {
  function ratingClick(id) {
    setSelectedRating(id);
    const buttons = document.querySelectorAll(".rating-button");
    buttons.forEach((item) => findButton(item));

    function findButton(item) {
      if (item.classList.contains(id)) {
        item.classList.add("active");
      } else if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    }
  }

  return (
    <div className="wrapper">
      <main>
        <img className="star-icon" src="../src/assets/images/icon-star.svg" />

        <h1>How did we do? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rating-buttons">
          <button className="rating-button 1" onClick={() => ratingClick(1)}>
            1
          </button>
          <button className="rating-button 2" onClick={() => ratingClick(2)}>
            2
          </button>
          <button className="rating-button 3" onClick={() => ratingClick(3)}>
            3
          </button>
          <button className="rating-button 4" onClick={() => ratingClick(4)}>
            4
          </button>
          <button className="rating-button 5" onClick={() => ratingClick(5)}>
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
