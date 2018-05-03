import React from "react";

const Subscribe = () => {
  return (
    <section>
      <h1>Join Our Mailing List</h1>

      <form>
        <input type="text" placeholder="First Name" />
        <div>
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />

        <button>Send</button>
      </form>
    </section>
  );
};

export default Subscribe;
