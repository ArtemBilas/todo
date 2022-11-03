import React from 'react';
import { useSelector } from "react-redux";
import { Col, Empty, Row } from "antd";
import TodoItem from "../TodoItem/TodoItem";
import FilterItem from '../Filter-Item/Filter-Item';
import { filterModes } from '../../constans';
import './TodoList.scss';

const TodoList = () => {
    const  todosListView  = useSelector(state => {
        const { todos, filterMode } = state.todos;

        if(filterMode === filterModes.filterAllList) return todos;
        if(filterMode === filterModes.filterCompleteList) return todos.filter(todoItem => Boolean(todoItem.isDone) );
        if(filterMode === filterModes.filterNeedToDoList) return todos.filter(todoItem => !Boolean(todoItem.isDone));
    });

    return <div className='todo-list'>
        {todosListView.length !== 0
            ? (
                <>
                    <Row span={24} justify="start">
                        <Col span={24}>
                            <FilterItem />
                        </Col>
                    </Row>
                    {todosListView.map(item => <TodoItem key={item.id} {...item} />)}
                </>
            ) : (<><Empty description={false} /></>)
        }
    </div>
}

export default TodoList;