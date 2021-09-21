import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
});

export const toggleTodo = (id: any) => ({
    type: TOGGLE_TODO,
    id: id
});

export const removeTodo = (id: any) => ({
    type: REMOVE_TODO,
    id: id
});

