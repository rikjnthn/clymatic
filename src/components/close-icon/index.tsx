import React from "react";

const CloseIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button onClick={onClick} type="button" title="Close">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="13.9241"
          y="12"
          width="20.0504"
          height="2.8"
          rx="1.4"
          transform="rotate(45 13.9241 12)"
          fill="#000000"
        />
        <rect
          x="12"
          y="26.1778"
          width="20.0504"
          height="2.8"
          rx="1.4"
          transform="rotate(-45 12 26.1778)"
          fill="#000000"
        />
      </svg>
    </button>
  );
};

export default CloseIcon;
