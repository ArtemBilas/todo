import React, {useState} from 'react';
import {Button, Input} from "antd";
import {useDispatch} from "react-redux";
import {todoActions} from "../../redux/todosReducer";
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!inputValue) return;

        const newTodo = {
            id: uuidv4(),
            text: inputValue,
            isDone: false
        }

        dispatch(todoActions.addTodo(newTodo));
        setInputValue('');
    }

    const handlerInput = (e) => {
        setInputValue(e.target.value);
    }

    return <form className='form' onSubmit={handleOnSubmit}>
        <Input.Group compact>
            <Input
                className='input-field'
                onChange={handlerInput}
                placeholder='What To Do?'
                value={inputValue}
            />
            <Button
                className='button-submit'
                type="primary"
                onClick={handleOnSubmit}
            >Submit</Button>
        </Input.Group>
    </form>
}

export default Form;