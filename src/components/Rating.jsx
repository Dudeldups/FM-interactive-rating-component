import "./Rating.scss";

export default function Rating({ rating, handleChange, handleSubmit }) {
  const possibleRatings = ["1", "2", "3", "4", "5"];

  const radioInputs = possibleRatings.map(num => (
    <>
      <label htmlFor={num}>
        <input
          key={num}
          id={num}
          type="radio"
          value={num}
          name="ratings"
          checked={rating === num}
          onChange={handleChange}
        />
        {num}
      </label>
    </>
  ));

  return (
    <div className="form">
      <div className="form__img-wrapper">
        <img src="./src/assets/icon-star.svg" alt="" />
      </div>
      <form>
        <fieldset>
          <legend className="form__text">
            <h2 className="form__text__title">How did we do?</h2>
            <p className="form__text__description">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </legend>
          <div className="form__input-container">{radioInputs}</div>
          <button className="form__button" onClick={handleSubmit}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
