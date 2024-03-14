import React from 'react';
import { TodoIcon } from './';
function DeleteIcon(props) {
    const { onDelete } = props;
    return (
        <TodoIcon type="delete" color="gray" onClick={onDelete} />
    );
}

export { DeleteIcon };