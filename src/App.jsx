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
        <SubmittedComponent />
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
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
