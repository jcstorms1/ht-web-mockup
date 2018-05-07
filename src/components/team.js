import React from "react";
import { withRouter } from "react-router-dom";

import "../stylesheets/team.css";
const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="our-team sm-container">
        <h1>Our Team</h1>
        <p>
          The founders of Hatchtrack, Michael and Meghan, live in Yacolt WA with
          their two daughters, horses, alpacas, sheep, miniature donkeys, ducks,
          and lots of chickens on a small animal rescue farm. We believe in the
          value of animal life the same as we believe in the value of human
          life!
        </p>
      </div>
      <div className="ceo sm-container">
        {/* <div className="ceo-image">
          <img src={CEO} alt="CEO" />
        </div> */}
        <div className="ceo-bio">
          <h1>Michael Anfang</h1>
          <p>
            Michael is CEO of a small engineering contracting company called
            Widgt, specializing in high quality electronic development across a
            wide variety of industries. He’s worked in technology in a diverse
            range of industries, including process equipment, defense, IT,
            automotive, radio, and consumer electronics. He loves escaping
            technology as well, and has backpacked many parts of the Appalachian
            Trail, Glacier National Park, and the Sacred Valley in Peru. Beyond
            egg incubation, he also wants to found a combination tech incubator
            and monastery, which he affectionately refers to as a space cult -
            will he be the first to keep chickens on Mars?
          </p>
        </div>
      </div>
      <div className="ceo-2 sm-container">
        <div className="ceo-2-bio">
          <h1>Meghan Anfang</h1>
          <p>
            Meghan is currently a stay at home mom for her two daughters and a
            natural birth advocate. She has been involved in the wedding
            industry, including running her own wedding styling business, is a
            certified doula, and has her hands more than full trying to bring
            her and Michael’s ideas to life! Her dream is to start a natural
            birth center to support educating and empowering women.
          </p>
        </div>
        {/* <div className="ceo-2-image">
          <img src={CEO2} alt="Co-Founder" />
        </div> */}
      </div>
    </div>
  );
};

export default withRouter(Team);
