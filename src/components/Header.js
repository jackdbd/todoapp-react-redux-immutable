import React from "react";

const Header = props => {
  const primaryColor = props.primaryColor || "orange";
  const className = `nav-wrapper ${primaryColor}`;
  return (
    <header>
      <nav>
        <div className={className}>
          <i className="material-icons left" style={{ fontSize: "3rem" }}>
            playlist_add_check
          </i>
          <h3 className="white-text">
            Get <strike>shit</strike> things done!
          </h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
