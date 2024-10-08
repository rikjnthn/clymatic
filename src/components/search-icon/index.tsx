import React from "react";

const SearchIcon = () => {
  return (
    <button type="submit" title="Search">
      <svg
        className="h-auto md:w-[40px]"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0727 17.8842C16.85 17.6616 16.85 17.3006 17.0727 17.078V17.078C17.2973 16.8533 17.6624 16.8557 17.8841 17.0833L20.3502 19.6143C20.5591 19.8288 20.5569 20.1713 20.3452 20.383V20.383C20.1315 20.5967 19.7851 20.5967 19.5715 20.383L17.0727 17.8842Z"
          fill="black"
        />
        <path
          d="M17.8725 9.75753C20.1134 11.9984 20.1134 15.6317 17.8725 17.8726C15.6316 20.1135 11.9984 20.1135 9.75748 17.8726C7.51657 15.6317 7.51657 11.9984 9.75748 9.75753C11.9984 7.51662 15.6316 7.51662 17.8725 9.75753ZM10.569 17.0611C12.3617 18.8538 15.2683 18.8538 17.061 17.0611C18.8538 15.2684 18.8538 12.3618 17.061 10.569C15.2683 8.77631 12.3617 8.77631 10.569 10.569C8.77626 12.3618 8.77626 15.2684 10.569 17.0611Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default SearchIcon;
