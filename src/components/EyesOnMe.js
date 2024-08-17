// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
  return (
    <div>
      <button
        onBlur={(e) => console.log("Hey! Eyes on me!")}
        onFocus={(e) => console.log("Good!")}>
        Eyes on me
      </button>
    </div>
  );
};
export default EyesOnMe;