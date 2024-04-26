import "./MainComponent.css";

export function MainComponent({ submit, setSelectedRating }) {
  function clickFn(id) {
    setSelectedRating(id);

    const buttons = document.querySelectorAll(".rating-button");
    buttons.forEach((button) => setActiveButton(button));

    function setActiveButton(button) {
      if (button.classList.contains(id)) {
        button.classList.add("active");
      } else if (button.classList.contains("active")) {
        button.classList.remove("active");
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
          <button className="rating-button 1" onClick={() => clickFn(1)}>
            1
          </button>
          <button className="rating-button 2" onClick={() => clickFn(2)}>
            2
          </button>
          <button className="rating-button 3" onClick={() => clickFn(3)}>
            3
          </button>
          <button className="rating-button 4" onClick={() => clickFn(4)}>
            4
          </button>
          <button className="rating-button 5" onClick={() => clickFn(5)}>
            5
          </button>
        </div>

        <button className="submit-rating-button" onClick={() => submit(true)}>
          SUBMIT
        </button>
      </main>
    </div>
  );
}
