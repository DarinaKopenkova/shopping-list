import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form className="addItem" onSubmit={this.onSubmit}>
        <button className="addItem_btn" type="submit">
          +
        </button>
        <input
          className="addItem_text"
          type="text"
          placeholder="Add item"
          onChange={this.onValueChange}
          value={this.state.text}
        ></input>
      </form>
    );
  }
}
