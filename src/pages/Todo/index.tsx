import React, { useState } from 'react';

interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}

const Todo = () => {
    const [listTodo, setListTodo] = useState<ITodo[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChangeInput = (value: string) => {
        setInputValue(value);
    };

    const addTodo = () => {
        const newTodo: ITodo = {
            id: new Date().toISOString(),
            title: inputValue,
            completed: false,
        };

        setListTodo([newTodo, ...listTodo]);
        setInputValue('');
    };

    const removeTodo = (id: string) => {
        setListTodo(listTodo.filter((item) => item.id !== id));
    };

    const handleComplete = (id: string) => {
        setListTodo(
            listTodo.map((item: ITodo) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }

                return item;
            })
        );
    };

    return (
        <div>
            <input value={inputValue} onChange={(e) => handleChangeInput(e.target.value)} placeholder="Enter todo" />
            <button onClick={addTodo}>Add todo</button>
            {listTodo.map((item: ITodo) => (
                <div>
                    {item.title}
                    <button onClick={() => handleComplete(item.id)}> {item.completed ? 'Completed' : 'Not Completed'}</button>
                    <button onClick={() => removeTodo(item.id)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todo;
