import React from "react";
import "./InfoCards.css";

function InfoCards() {
  return (
    <div className="info-cards" data-aos="fade-up">
      <div className="info-card">
        <span className="icon">📊</span>
        <p>
          Small-scale farmers can boost their profits by up to 40% by selling
          directly to consumers.
        </p>
      </div>
      <div className="info-card">
        <span className="icon">🚚</span>
        <p>
          Around 25% of fresh produce is lost in transit due to inefficient
          distribution networks.
        </p>
      </div>
      <div className="info-card">
        <span className="icon">🌾</span>
        <p>
          Farmers using crop management and weather forecasting tools can
          increase yields by up to 20%.
        </p>
      </div>
    </div>
  );
}

export default InfoCards;
