import "./Item.css";
import { ReactComponent as CheckMark } from "../assets/check.svg";

export default function Item(props) {
  return (
    <div className={`item ${props.item.finished ? "item_finished" : ""}`}>
      <div
        className="item__icon"
        onClick={() => {
          props.onClick(props.index);
        }}
      >
        {props.item.finished && <CheckMark className="item__checkmark" />}
      </div>
      <div className="item__text">{props.item.text}</div>
    </div>
  );
}
