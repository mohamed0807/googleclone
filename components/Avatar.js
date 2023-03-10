import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile"
      className={`h-10 cursor-pointer rounded-full transition duration-150 transform hover:scale-110 ${className} `}
    />
  );
};

export default Avatar;
