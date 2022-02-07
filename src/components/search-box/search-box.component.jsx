import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
