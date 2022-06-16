import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1 style={{ color: "red" }}>{title}</h1>
      <Button color="blue" text="Accept" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker Default",
};

Header.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
