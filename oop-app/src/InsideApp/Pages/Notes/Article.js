import React, { useEffect, useState } from 'react';
import { List, Avatar, Space,Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'

var listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


class Article extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={listData:[]}
  }
  componentDidUpdate()
  {
    axios.get("http://localhost:8000/api/diary/")
  .then(res=>{
    
    this.setState({listData:res.data})
});
  }
 componentDidMount() {
  axios.get("http://localhost:8000/api/diary/")
  .then(res=>{
    console.log(res.data);
    this.setState({listData:res.data})
});
 }

  render()
  {
    return(
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.state.listData}
          renderItem={item => (
            <List.Item
              key={item.title}
            >
              <List.Item.Meta
                title={item.title}
                description={item.description}
                date={item.date}
              />
              
            </List.Item>
          )}
        />
        <Button type="primary"><Link to="/dashboard/notes/new">
          Add new entry
          </Link>
        </Button>
      </div>
        
  
  
    )
            }
}

export default Article;