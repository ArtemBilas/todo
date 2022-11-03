import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../redux/todosReducer';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Checkbox from 'antd/es/checkbox/Checkbox';
import Modal from 'antd/es/modal/Modal';
import { Input } from 'antd';
import './TodoItem.scss';

const TodoItem = ({ id, text, isDone }) => {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalInputValue, setModalInputValue] = useState('');
    const [isErrorValue, setIsErrorValue] = useState(false);

    const checkboxHandle = () => {
        dispatch(todoActions.doneTodo(id));
    }

    const handleDeleteTodo = () => {
        dispatch(todoActions.deleteTodo(id));
    }

    const handleInputModalValue = (e) => {
        let inputValue = e.target.value;

        if (inputValue.length === 0 || !inputValue.trim()) {
            setIsErrorValue(true);
            setModalInputValue(inputValue);
        } else {
            setIsErrorValue(false);
            setModalInputValue(inputValue);
        }
    }

    const handleOkModal = () => {
        if (isErrorValue) return;

        dispatch(todoActions.editTodo(id, modalInputValue));
        setModalIsOpen(false);
    }

    const handleCancelModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        setModalInputValue(text);
    }, [text]);

    return <div className='todo-item'>
        <p className='check-box'>
            <Checkbox onChange={() => checkboxHandle()} checked={isDone} />
            <span className={!isDone ? 'content ' : 'content done'}>{text}</span>
        </p>

        <p className='icon-container'>
            <EditOutlined onClick={() => setModalIsOpen(true)} />
            <DeleteOutlined onClick={() => handleDeleteTodo()} />
        </p>

        <Modal
            key={`modal-${id}`}
            title='Edit ToDo'
            open={modalIsOpen}
            onOk={() => handleOkModal()}
            onCancel={() => handleCancelModal()}
        >
            <p className='edit-modal-todo'>Type to edit your todo below:</p>

            <Input
                className='input-modal-field'
                onChange={(e) => handleInputModalValue(e)}
                value={modalInputValue}
            />

            {!isErrorValue ? null : <span className='error-value'>The value can not be empty!</span>}
        </Modal>
    </div>
}

export default TodoItem;