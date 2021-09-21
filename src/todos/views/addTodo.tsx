import React, {useState} from 'react';
import {connect} from 'react-redux';
import './style.css';
import {addTodo} from '../actions';

const AddTodo = (props: any) => {

    const [input, setInput] = useState<any>(null);

    const onSubmit = (ev: any) => {
        ev.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        props.onAdd(input.value);
        input.value = '';
    }

    const refInput = (node: any) => {
        setInput(node);
    }

    return (
        <div className="add-todo">
            <form onSubmit={onSubmit}>
                <input className="new-todo" ref={refInput}/>
                <button className="add-btn" type="submit">
                    添加
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAdd: (text: string) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);

