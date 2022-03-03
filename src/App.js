import React from "react";
import "./App.css";
import Item from "./components/Item/Item";

let initialList = [
  {
    text: "Apples",
    finished: false,
  },
  {
    text: "Oranges",
    finished: false,
  },
  {
    text: "Potato",
    finished: false,
  },
  {
    text: "Beans",
    finished: true,
  },
];

function App() {
  const [list, setList] = React.useState(initialList);

  function onDelete(targetIndex) {
    const newList = list.map((item, index) => {
      if (index !== targetIndex) {
        return item;
      } else {
        return {
          ...item,
          finished: !item.finished,
        };
      }
    });
    setList(newList);
  }
  return (
    <div className="root">
      {list.map((item, index) => (
        <Item index={index} onClick={onDelete} item={item} />
      ))}
    </div>
  );
}

export default App;
