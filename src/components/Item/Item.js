import "./Item.css";
import { ReactComponent as CheckMark } from "../assets/check.svg";

export default function Item(props) {
  return (
    <div
      key={props.item.id}
      className={`item ${props.item.finished ? "item_finished" : ""}`}
    >
      <div
        className="item__icon"
        onClick={() => {
          props.onClick(props.item.id);
        }}
        onChange={() => {
          props.onChange(props.item.id);
        }}
      >
        {props.item.finished && <CheckMark className="item__checkmark" />}
      </div>

      <div key={props.item.id} className="item__text">
        {props.item.text}
      </div>
    </div>
  );
}
