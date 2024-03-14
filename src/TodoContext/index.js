import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const normalizeString = (string) => {
    string = string || "";
    string = string.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    string = string.trim();
    return string;
};

const TodoContext = createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = normalizeString(todo.text);
        const searchText = normalizeString(searchValue);
        return todoText.includes(searchText);
    });

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        let newTodos = [...todos];
        newTodos = newTodos.filter((todo) => todo.text !== text);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos);
        // setOpenModal(false);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };