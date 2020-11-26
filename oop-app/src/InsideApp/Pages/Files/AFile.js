import { Card, Col, Row, Button } from 'antd';
import React, {useCallback} from 'react';
import { Form, Input } from 'antd';
import {useDropzone} from 'react-dropzone'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AFile extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    </Row>
                    <Link to = '/dashboard/file/new'><Button style={{marginTop:10}}>Upload image</Button></Link>
                </div>
                )
        }
    }

export default AFile