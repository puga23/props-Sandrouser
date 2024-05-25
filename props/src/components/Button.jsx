import React from "react";

function Button({ color, children }) {
  return (
    <div>
      <button className={color}>{children}</button>
    </div>
  );
}

export default Button;
