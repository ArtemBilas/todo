import { Row, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { filterModes } from '../../constans';
import { todoActions } from '../../redux/todosReducer';
import './Filter-Item.scss';

const FilterItem = () => {
  const dispatch = useDispatch();

  const handleFilterAllList = () => {
    dispatch(todoActions.allTodolist(filterModes.filterAllList));
  }

  const handleFilterCompleteList = () => {
    dispatch(todoActions.completeList(filterModes.filterCompleteList))
  }

  const handleFilterNeedTodoList = () => {
    dispatch(todoActions.needTodoList(filterModes.filterNeedToDoList));
  }

  return <div className='filter-block'>
    <Row span={24} justify="start">
      <Col span={24}>
        <Button onClick={() => handleFilterAllList()}>All</Button>
        <Button onClick={() => handleFilterCompleteList()}>Complete</Button>
        <Button onClick={() => handleFilterNeedTodoList()}>Todo</Button>
      </Col>
    </Row>
  </div>;
};

export default FilterItem;
