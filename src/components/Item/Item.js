import "./Item.css";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";

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
        {props.item.finished && <CheckIcon className="item__checkmark" />}
      </div>

      <div key={props.item.id} className="item__text">
        {props.item.text}
      </div>

      <button
        className="item__button-remove"
        onClick={() => {
          props.onRemove(props.item.id);
        }}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
