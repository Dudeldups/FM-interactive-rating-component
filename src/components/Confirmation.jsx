import "./Confirmation.scss";

export default function Confirmation({ rating }) {
  return (
    <div className="confirmation" aria-live="polite">
      <img
        className="confirmation__image"
        src="assets/illustration-thank-you.svg"
        alt=""
      />
      <p className="confirmation__rating">You selected {rating} out of 5</p>
      <h2 className="confirmation__thanks">Thank you!</h2>
      <p className="confirmation__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
