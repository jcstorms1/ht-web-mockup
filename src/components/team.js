import React from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/story.css";
const OurTeam = () => {
  return (
    <div className="team-wrapper">
      <div className="cover">
        <div className="team">
          <h1>Our Story</h1>
          <p>
            I’d always talked about chickens for years before I had any. After
            getting chickens and learning so much about these smart birds, I
            found the Pavlovskaya chicken - a rare breed from Russia. I had eggs
            shipped to me from across the country, and six out of twelve
            hatched.
          </p>
          <br />
          <p>
            I wanted to find a better way to incubate eggs - and realized that
            started with gathering data. I built a prototype to log data to the
            internet and display it, and realized that if I could gather this
            data from incubators across the world, we could learn better how to
            incubate eggs.
          </p>
          <br />
          <p>
            I hope to use this information and profits from Peep to help grow
            and expand our knowledge of chickens, and realized this same
            technology could do the same for other birds (and even reptiles -
            aren’t chickens just tiny dinosaurs anyway?)
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OurTeam);
