import './App.scss';
import Form from "./componets/Form/Form";
import TodoList from "./componets/TodoList/TodoList";
import {Row, Col} from "antd";

const App = () => {
    return <div className='app-container'>
        <Row span={24}>
            <Col span={12} offset={6}>
                <h1 className='title'>Todo App</h1>
                <Form/>
                <TodoList/>
            </Col>
        </Row>
    </div>
}

export default App;
