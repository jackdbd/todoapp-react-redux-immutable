import React from "react";

const Header = props => {
  const primaryColor = props.primaryColor || "orange";
  const navClass = `nav-extended ${primaryColor}`;
  const divClass = `nav-wrapper ${primaryColor}`;
  return (
    <nav className={navClass}>
      <div className={divClass}>
        <i className="material-icons left" style={{ fontSize: "3rem" }}>
          playlist_add_check
        </i>
        <h3 className="white-text">
          Get <strike>shit</strike> stuff done!
        </h3>
      </div>
    </nav>
  );
};

export default Header;
