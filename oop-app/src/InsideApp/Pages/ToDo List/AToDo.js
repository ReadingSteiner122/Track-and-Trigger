import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class AToDo extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        editable:true,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        editable:true,
      },
      {
        title:'User',
        dataIndex: 'user',
        editable:true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      key:0,
      dataSource: [],
      count: 0,
      newData:[],
    };
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/todoitem/')
    .then(res=>{
      var arr=[];
      for(var i=0;i<res.data.length;i++)
      {
        arr.push({key:i+1,name:res.data[i].name,date:res.data[i].date,description:res.data[i].description,user:res.data[i].user})
      }
      console.log(arr);
      this.setState({
        dataSource: arr
      })
    })
  }

  handleDelete = async (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),

    });
    console.log(key)
    await axios.get('http://127.0.0.1:8000/api/todoitem/')
    .then(async (res) =>{
      console.log(res.data)
      await this.setState({key:res.data[key-1].id})
      console.log(this.state.key)
    })
    console.log(this.state.key)
    await axios.delete('http://127.0.0.1:8000/api/todoitem/'+this.state.key+'/',{
      headers:{
        'Content-Type':'application/json'
      }
    })
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      name: "Add ToDo item",
      date: '2020-11-29',
      description: `Click to add Description`,
      user:7
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    console.log(newData)
    axios.post('http://127.0.0.1:8000/api/todoitem/',newData)
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  };
  handleSave = async (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
    console.log(newData)
    await axios.get('http://127.0.0.1:8000/api/todoitem/')
    .then(async (res) =>{
      console.log(res.data)
      await this.setState({key:res.data[row.key-1].id})
      console.log(this.state.key)
    })
    console.log(this.state.key)
    await axios.put('http://127.0.0.1:8000/api/todoitem/'+this.state.key+'/',newData[row.key-1],{
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(async (res)=>{
      console.log(res);
      console.log(res.data);
    })
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <div style={{marginLeft:250, marginRight:50}}>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        </div>
      </div>
    );
  }
}

export default AToDo