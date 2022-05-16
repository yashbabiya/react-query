import React from "react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <img
        src="https://react-query.tanstack.com/_next/static/images/logo-7a7896631260eebffcb031765854375b.svg"
        alt=""
      />
      <p>
        React.js is a powerful client-side JavaScript library. Like any other
        JavaScript library, React.js gives you a smooth experience when building
        reactive and declarative user interfaces.
      </p>
      <p>
        However, there are a few negative aspects to it, like state management
        and data fetching.
      </p>
      <p>
        Server state management is a little different from other libraries. In
        React.js, it is asynchronous and the data persists remotely with no
        direct control. This means that we have to update, cache or re-fetch the
        data to efficiently manage the state in React.js applications. React
        Query is a pre-configured library that aims to solve these complexities.
      </p>
      <b>
        Using React Query, we can fetch, cache, and update data in React-based
        applications in a simple and declarative manner without mutating the
        global state.
      </b>
    </div>
  );
}
