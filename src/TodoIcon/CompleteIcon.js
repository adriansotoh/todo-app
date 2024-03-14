import React from 'react';
import { TodoIcon } from "./"

function CompleteIcon(props) {
    const { completed, onComplete } = props;
    return (
        <TodoIcon type="check" color={completed ? "green" : "gray"} onClick={onComplete} />
    );
}

export { CompleteIcon };