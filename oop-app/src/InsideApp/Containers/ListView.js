import React from 'react';
import ListItem from '../Components/ListItem'
import axios from 'axios';

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

class ItemLists extends React.Component{
    state ={
        ListItem:[]
    }

    componentDidMount(){
        
        axios.get('url')
        .then(res => {
            this.setState({
                ListItem: res.data
            });
        })
    }
    render(){
        return(
            
            <ListItem data={this.state.ListItem}/>    
                                 
        )
    }
}

export default ItemLists;