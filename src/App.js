import React, { Component } from "react";
import "./App.css";
import Item from "./components/Item/Item";
import Button from "./components/Button/Button";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialList: [
        { text: "Apples", finished: false, id: 1 },
        { text: "Oranges", finished: false, id: 2 },
        { text: "Potato", finished: false, id: 3 },
      ],
    };
    this.onDelete = this.onDelete.bind(this);
    this.onMoveItem = this.onMoveItem.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.maxId = 4;
  }
  onDelete(id) {
    let newList = this.state.initialList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          finished: !item.finished,
        };
      }
      return item;
    });

    newList = this.onMoveItem(newList, id);

    this.setState({ initialList: newList });
  }

  onMoveItem(arr, id) {
    arr.forEach((item, index) => {
      if (item.id === id) {
        arr.push(item);
        arr.splice(index, 1);
      }
    });
    return arr;
  }

  onAdd(value) {
    if (!value) {
      return;
    }
    const newItem = {
      text: value,
      finished: false,
      id: this.maxId++,
    };
    this.setState(({ initialList }) => {
      let newArr = [newItem, ...initialList];
      return {
        initialList: newArr,
      };
    });
  }
  removeItem(id) {
    let indexItem = this.state.initialList.findIndex((elem) => elem.id === id);
    const before = this.state.initialList.slice(0, indexItem);
    const after = this.state.initialList.slice(indexItem + 1);
    this.setState(({ initialList }) => {
      return {
        initialList: [...before, ...after],
      };
    });
  }

  render() {
    return (
      <div className="root">
        <Button onAdd={this.onAdd} />
        {this.state.initialList.map((item) => (
          <Item
            onChange={this.onMoveItem}
            onClick={this.onDelete}
            onRemove={this.removeItem}
            item={item}
          />
        ))}
      </div>
    );
  }
}
