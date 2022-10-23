import React from 'react';
import {useSelector} from "react-redux";
import {Empty} from "antd";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.scss';

const TodoList = () => {
    const {todos} = useSelector(state => state.todos);

    return <div className='todo-list'>
        {todos.length
            ? todos.map(item => <TodoItem key={item.id} {...item} />)
            : <><Empty description={false}/></>
        }
    </div>
}

export default TodoList;