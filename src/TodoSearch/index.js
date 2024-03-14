import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch(props) {
    const { searchValue, setSearchValue } = useContext(TodoContext);
    return (
        <input
            className="TodoSearch"
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };