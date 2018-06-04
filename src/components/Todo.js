import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseOver() {
    this.setState({ hover: true });
  }

  onMouseOut() {
    this.setState({ hover: false });
  }

  renderDone(text) {
    return (
      <div>
        <i className="material-icons left">done</i>
        <strike>
          <span className="card-title">{text}</span>
        </strike>
      </div>
    );
  }

  renderNotDone(text) {
    return (
      <div>
        <i className="material-icons left">work</i>
        <span className="card-title">{text}</span>
      </div>
    );
  }

  render() {
    const { text, isDone, primaryColor, secondaryColor } = this.props;
    const className = this.state.hover
      ? `card ${primaryColor}`
      : `card ${secondaryColor}`;
    return (
      <div className="row">
        <div className="col s12" style={{ cursor: "pointer" }}>
          <div className={className}>
            <div
              className="card-content white-text"
              onMouseOver={() => this.onMouseOver()}
              onMouseOut={() => this.onMouseOut()}
            >
              {isDone ? this.renderDone(text) : this.renderNotDone(text)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
