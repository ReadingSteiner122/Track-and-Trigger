import { Card, Col, Row, Button } from 'antd';
import React, {useCallback} from 'react';
import { Form, Input } from 'antd';
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import {Link} from 'react-router-dom'

const { Meta } = Card;

class AFile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:[]
        }
        
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/image_object/')
        .then(res=>{
            console.log(res.data);
            this.setState({data:res.data});
        }) 
    }
    render()
    {
        return (
            <div className="site-card-wrapper">
                <Row>


                   {this.state.data.map((item,index)=>{
                       return (
                    <div key={index} style={{margin:65}}>        
                    <Card
                        hoverable
                        style={{ width: 240}}
                        cover={<img alt="example" src={item.image} />}
                        key={index}>
                        <Meta title={item.name}  />
                        </Card>
                    </div>
                    )} )
                       } 
                </Row>

                <Link to = '/dashboard/file/new'><Button style={{marginTop:10}}>Upload image</Button></Link>
            </div>
            )
    }
        }
    

export default AFile

/*

 */