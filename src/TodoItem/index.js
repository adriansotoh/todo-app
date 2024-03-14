import "./TodoItem.css";
// import { CompleteIcon } from "../TodoIcon/CompleteIcon.js";
// import { DeleteIcon } from "../TodoIcon/DeleteIcon.js";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoItem(props) {
    const { text, completed, onDelete, onComplete } = props;
    return (
        <li className="TodoItem">
            {/* <CompleteIcon completed={completed} onComplete={onComplete} /> */}
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}>
                <FaCheck />
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            {/* <DeleteIcon onDelete={onDelete} /> */}
            <span className={`Icon Icon-delete`} onClick={onDelete}>
                <FaTimes />
            </span>
        </li>
    );
}

export { TodoItem };