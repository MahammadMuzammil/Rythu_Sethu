import React from "react";
import "./FeatureSection.css";
import cropManagementImage from "../../assets/crop-management.jpg";
import financialManagementImage from "../../assets/financial-management.jpg";
import weatherForecastingImage from "../../assets/weather-forecasting.jpg";

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-card" data-aos="fade-up">
        <div className="feature-text">
          <h2>Crop Management</h2>
          <p>
            Plan, track, and manage every stage of your crop cycle with
            reminders and insights to boost productivity and ensure timely
            harvests.
          </p>
          <button className="try-now-btn">Try now</button>
        </div>
        <div className="feature-image">
          <img src={cropManagementImage} alt="Crop Management" />
        </div>
      </div>

      <div
        className="feature-card reverse"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="feature-text">
          <h2>Financial Management</h2>
          <p>
            Keep track of all your expenses and earnings, with detailed reports
            to help you make smart financial decisions and improve your farm's
            profitability.
          </p>
          <button className="try-now-btn">Try now</button>
        </div>
        <div className="feature-image">
          <img src={financialManagementImage} alt="Financial Management" />
        </div>
      </div>

      <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
        <div className="feature-text">
          <h2>Weather Forecasting</h2>
          <p>
            Get accurate local weather updates and alerts to plan your farm
            activities, reduce risks, and protect your crops from unexpected
            weather changes.
          </p>
          <button className="try-now-btn">Try now</button>
        </div>
        <div className="feature-image">
          <img src={weatherForecastingImage} alt="Weather Forecasting" />
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
