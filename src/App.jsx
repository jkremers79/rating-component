import { useState } from "react";
import { SubmittedComponent } from "./SubmittedComponent";
import { MainComponent } from "./MainComponent";
import "./App.css";

function App() {
  const [submittedRating, setSubmittedRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  return (
    <>
      {submittedRating ? (
        <SubmittedComponent selectedRating={selectedRating} />
      ) : (
        <MainComponent
          submitted={submittedRating}
          clickFn={setSubmittedRating}
          setSelectedRating={setSelectedRating}
          selectedRating={selectedRating}
        />
      )}
      <div className="attribution">
        Challenge by
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
