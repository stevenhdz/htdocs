import React from "react";

export const TitleComponent = ({ title, size }) => {
  return size == "h1" ? (
    <h1 className="mb-4">{title}</h1>
  ) : size == "h2" ? (
    <h2 className="mb-4">{title}</h2>
  ) : size == "h3" ? (
    <h3 className="mb-4">{title}</h3>
  ) : size == "h4" ? (
    <h4 className="mb-4">{title}</h4>
  ) : size == "h5" ? (
    <h5 className="mb-4">{title}</h5>
  ) : size == "h6" ? (
    <h6 className="mb-4">{title}</h6>
  ) : null;
};
