import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (localStorageItem) {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }

                setLoading(false);
            } catch (err) {
                setLoading(false)
                setError(true);
            }
        }, 2000)
    }, []);

    const saveItem = (newItem) => {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };