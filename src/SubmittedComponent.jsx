import "./SubmittedComponent.css";

export function SubmittedComponent({ selectedRating }) {
  return (
    <div className="wrapper">
      <main>
        <img src="./src/assets/images/illustration-thank-you.svg" />
        <p className="show-rating">{`You selected ${selectedRating} out of 5`}</p>
        <h1>Thank you!</h1>
        <p className="submitted-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </main>
    </div>
  );
}
