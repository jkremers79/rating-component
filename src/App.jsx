import { useState } from "react";
import { SubmittedComponent } from "./SubmittedComponent";
import { MainComponent } from "./MainComponent";
import "./App.css";

function App() {
  const [didSubmitRating, setDidSubmitRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  return (
    <>
      {didSubmitRating ? (
        <SubmittedComponent selectedRating={selectedRating} />
      ) : (
        <MainComponent
          submit={setDidSubmitRating}
          setSelectedRating={setSelectedRating}
        />
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/jkremers79" target="_blank">
          Jorn Kremers
        </a>
        .
      </div>
    </>
  );
}

export default App;
