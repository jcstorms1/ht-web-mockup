import React from "react";
import "../stylesheets/aboutus.css";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="intro sm-container">
        <h1>Intimidated by incubation?</h1>

        <p>
          Let Peep give you a guided experience, based on our collective
          knowledge of how to best incubate eggs. At the same time, we can learn
          how different rare species hatch best with different conditions,
          allowing people trying to preserve rare breeds get the best hatch
          rate! Peep and her Egg allow you to use your current incubator,
          whether it’s got digital controls with automatic temperature control
          or a rotating dial to turn the heat up and down. Plastic, styrofoam,
          even home-made - Peep and her Egg can help you make sure your
          incubator and turning system is working properly, and give you advice
          on incubation too.
        </p>
      </div>
      <div className="peep sm-container">
        <h1>Peep</h1>
        <p>
          Peep is your personal hatching assistant. She guides you through the
          incubation process step by step! She can help make sure your
          incubation conditions are correct, and send you notifications to turn
          your eggs on your phone. She lets you know when to candle your eggs,
          when to move to lockdown...and when paired with her Egg, she reports
          real-time conditions in the incubator.
        </p>
      </div>
      <div className="egg sm-container">
        <h1>Egg</h1>
        <p>
          Peep’s egg really lets her show her techno-chicken wizardry. The egg
          monitors egg incubation conditions, can let Peep display them on your
          phone, and notifies you if temperature or humidity need to be
          adjusted. The Egg also even sense if the eggs are being turned
          properly! Beyond that, the Egg logs this information to the cloud, and
          when combined with information on how many eggs hatched, will allow
          the community to better understanding best incubation conditions!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
