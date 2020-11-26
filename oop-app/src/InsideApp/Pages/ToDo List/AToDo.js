import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, Radio, Divider, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title:'Date',
    dataIndex:'date'
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class AToDo extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return <div style={{marginLeft:250, marginRight:50}}><div style={{marginBottom:10}}><Link to='/dashboard/to-do/new'><Button type="primary">
    Add new entry
  </Button></Link></div>
  <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  </div>;
  }
}

export default AToDo;