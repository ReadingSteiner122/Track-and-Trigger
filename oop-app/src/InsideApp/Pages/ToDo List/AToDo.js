import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, Radio, Divider, Button } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    date: 32,
    desc: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    date: 42,
    desc: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    date: 32,
    desc: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    date: 99,
    desc: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const AToDo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />
    <div style={{marginLeft:250, marginRight:50}}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
    <Button type="primary">
          Add Item
        </Button>
    </div>
  );
};

export default AToDo;
