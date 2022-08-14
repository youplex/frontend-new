import React from "react";
import "../cards.css";
import "../cards.js";

function Cards() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container">
          <div className="circular-progress">
            <div className="value-container">0%</div>
          </div>
          <div className="Heading">
            <h1>ReactJs</h1>
            <p>30 Videos</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
