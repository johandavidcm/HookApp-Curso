import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
        return () => {
            
        }
    }, [todos]);

    const handleDelete = ( todoId ) => {
        // Crear la accion

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch( action );
        //
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch( {
            type: 'add',
            payload: newTodo
        });
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                        todos = { todos }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo = { handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}