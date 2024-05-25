import React from "react";

function Button({ children, color }) {
  return (
    <div>
      <button className={color}>{children}</button>
    </div>
  );
}

export default Button;
