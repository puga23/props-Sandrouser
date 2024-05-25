import React from "react";

function Home({ children, lc }) {
  return (
    <div>
      <h1 className={lc}>{children}</h1>
    </div>
  );
}

export default Home;
