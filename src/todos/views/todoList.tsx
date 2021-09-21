import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {toggleTodo, removeTodo} from '../actions';
import {FilterTypes} from '../../constants';
import './style.css';

const TodoList = (props: any) => {
    const {todos, onToggleTodo, onRemoveTodo} = props;
    return (
        <ul className="todo-list">
            {
                todos.map((item: any) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    );
};

const selectVisibleTodos = (todos: any[], filter: any) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onToggleTodo: (id: any) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id: any) => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

