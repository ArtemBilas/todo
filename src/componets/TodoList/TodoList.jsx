import React from 'react';
import { useSelector } from "react-redux";
import { Col, Empty, Row } from "antd";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.scss';
import FilterItem from '../Filter-Item/Filter-Item';

const TodoList = () => {
    const { todos } = useSelector(state => state.todos);

    return <div className='todo-list'>
        {todos.length
            ? (
                <>
                    <Row span={24} justify="start">
                        <Col span={24}>
                            <FilterItem />
                        </Col>
                    </Row>
                    {todos.map(item => <TodoItem key={item.id} {...item} />)}
                </>
            ) : (<><Empty description={false} /></>)
        }
    </div>
}

export default TodoList;