import React from "react";
import Countdown from "react-countdown-now";
import "../stylesheets/kickstarter.css";

const KickStarter = () => {
  return (
    <section className="kickstarter">
      <h1>Kickstarter Coming Soon!</h1>
      <Countdown date={Date.now() + 1000000} daysInHours={true} />
    </section>
  );
};

export default KickStarter;
