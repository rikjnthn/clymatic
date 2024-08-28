import React from "react";

const Hamburger = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button onClick={onClick} type="button" title="Hamburger">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="11.6"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="white"
        />
        <rect
          x="10"
          y="18.4"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="white"
        />
        <rect
          x="10"
          y="25.2"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
