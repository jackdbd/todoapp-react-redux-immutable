import React from "react";

const Footer = props => {
  const primaryColor = props.primaryColor || "orange";
  const textClass = "grey-text text-lighten-3";
  const className = `page-footer ${primaryColor}`;
  return (
    <footer className={className}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About</h5>
            <span className="grey-text text-lighten-4">
              Code:{" "}
              <a
                className={textClass}
                href="https://github.com/jackdbd/todoapp-react-redux-immutable"
                target="_blank"
                rel="noopener noreferrer"
              >
                repo on GitHub
              </a>
            </span>

            <br />
            <span className="grey-text text-lighten-4">
              Me:{" "}
              <a
                className={textClass}
                href="https://twitter.com/jackdbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.linkedin.com/in/giacomodebidda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.giacomodebidda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </span>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Built with</h5>
            <ul>
              <li>
                <a
                  className={textClass}
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://facebook.github.io/immutable-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immutable.js
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://materializecss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Materialize CSS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
