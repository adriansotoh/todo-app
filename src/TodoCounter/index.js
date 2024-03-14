import { useContext } from "react";
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext);

    if (totalTodos === 0) {
        return (
            <h1 className="TodoCounter">Esperando a que agregues algún TODO</h1>
        );
    }

    if (totalTodos === completedTodos) {
        return (
            <h1 className="TodoCounter">¡Felicidades! Has completado todos tus pendientes</h1>
        );
    }
    return (
        <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
    );
}

export { TodoCounter };