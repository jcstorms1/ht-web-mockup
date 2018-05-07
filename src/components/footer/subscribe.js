import React from "react";

const Subscribe = () => {
  return (
    <section>
      <h1>Subscribe</h1>

      <form>
        <input type="text" placeholder="First Name" />
        <div>
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />
        <div className="button">
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
