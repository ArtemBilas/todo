import { Row, Col, Button } from 'antd';
import './Filter-Item.scss';

const FilterItem = () => {
  return <div className='filter-block'>
    <Row span={24} justify="start">
      <Col span={24}>
        <Button>All</Button>
        <Button>Complete</Button>
        <Button>Todo</Button>
      </Col>
    </Row>
  </div>;
};

export default FilterItem;
