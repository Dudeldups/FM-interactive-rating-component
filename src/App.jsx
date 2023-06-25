import { useEffect, useState } from "react";

import Rating from "./components/Rating";
import Confirmation from "./components/Confirmation";

import "./scss/main.scss";

export default function App() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [rating, setRating] = useState("");

  function handleChange(e) {
    setRating(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (rating !== "") {
      setisSubmitted(true);
    }
  }

  return (
    <>
      <header>
        <h1 className="sr-only">This is a Frontend Mentor challenge</h1>
      </header>
      <main className="card">
        {isSubmitted ? (
          <Confirmation rating={rating} />
        ) : (
          <Rating
            rating={rating}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </main>
    </>
  );
}
