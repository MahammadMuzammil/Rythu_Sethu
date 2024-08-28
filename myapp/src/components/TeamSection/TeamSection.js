import React from "react";
import "./TeamSection.css";
import teamMember1 from "../assets/team-member1.jpg";
import teamMember2 from "../assets/team-member2.jpg";
import teamMember3 from "../assets/team-member3.jpg";
import teamMember4 from "../assets/team-member4.jpg";

function TeamSection() {
  return (
    <div className="team-section" data-aos="fade-up">
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <div className="image-container">
            <img
              src={teamMember1}
              alt="Md Abdul Azeez"
              className="team-image"
            />
          </div>
          <p className="team-name">Md Abdul Azeez</p>
        </div>
        <div className="team-member">
          <div className="image-container">
            <img src={teamMember2} alt="M Prithvi" className="team-image" />
          </div>
          <p className="team-name">M Prithvi</p>
        </div>
        <div className="team-member">
          <div className="image-container">
            <img src={teamMember3} alt="K Chakri" className="team-image" />
          </div>
          <p className="team-name">K Chakri</p>
        </div>
        <div className="team-member">
          <div className="image-container">
            <img
              src={teamMember4}
              alt="M Sivarama Teja"
              className="team-image"
            />
          </div>
          <p className="team-name">M Sivarama Teja</p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
