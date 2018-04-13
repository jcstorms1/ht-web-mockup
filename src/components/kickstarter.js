import React, { Component } from "react";
import Moment from "moment";
import "../stylesheets/kickstarter.css";

class KickStarter extends Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    seconds: "",
    intervalId: null,
    deadline: "2018-05-31 23:59:59",
    launched: false
  };

  timeLeft = () => {
    const end = Moment(this.state.deadline);
    const now = Moment(new Date());
    if (end.diff(now) < 0) {
      this.setState({ launched: true });
    } else {
      const seconds = end.diff(now, "seconds") % 60;
      const mins = end.diff(now, "minutes") % 60;
      const hours = end.diff(now, "hours") % 24;
      const days = end.diff(now, "days");
      this.setState({ days, hours, mins, seconds });
    }
  };
  componentDidMount() {
    const intervalId = setInterval(() => this.timeLeft(), 1000);
    this.setState({ started: true });
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    console.log(this.state.intervalId);
    return (
      <section className="kickstarter">
        <h1>Kickstarter Coming June 1st, 2018!</h1>
        {this.state.seconds === "" && !this.state.launched ? (
          <span>Calculating...</span>
        ) : (
          <div className="clock">
            <div className="days">{this.state.days} Days</div>
            <div>{this.state.hours} Hours</div>
            <div>{this.state.mins} Min(s)</div>
            <div>{this.state.seconds} Sec(s)</div>
          </div>
        )}
      </section>
    );
  }
}

export default KickStarter;
