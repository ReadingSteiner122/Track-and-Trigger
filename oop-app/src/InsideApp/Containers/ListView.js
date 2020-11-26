import React from 'react';
import FileItem from '../Components/FileItem'
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

class FileLists extends React.Component{
    state ={
        FileItem:[]
    }

    componentDidMount(){
        
        axios.get('http://localhost:8000/api/image_object/')
        .then(res => {
            this.setState({
                FileItem: res.data
            });
        })
    }
    render(){
        return(
            
            <FileItem data={data}/>    
                                 
        )
    }
}

export default FileLists;
