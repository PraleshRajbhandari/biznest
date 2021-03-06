import React from 'react';
import { Form, Input, Button,Layout,Typography,Row,Col } from 'antd';


const { Content } = Layout;


const validateMessages = {

    types: {
      email: '${label} is not a valid email!',
      phone_number: '${label} is not a valid number!',
    }
  };

const AppContact = ()=>{
    return(
      <div>
        <Row>
            <Col xl={18}>
                <Content style={{margin:30}}>
                    <Form
                        validateMessages={validateMessages}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name' }]}
                >
                    <Input  placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ type:'email', required: true, message: 'Please input your Email' }]}
                >
                    <Input  placeholder="Enter your Email" />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone_number"
                >
                    <Input  placeholder="Enter your Phone Number" />
                </Form.Item>
                <Form.Item
                    name="query"
                    label="Query"
                    rules={[{ required: true, message: 'Please input your Query' }]}
                    
                >
                    <Input.TextArea
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    showCount 
                    maxLength={100} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                    </Form>
                </Content>
            </Col>
        </Row>
      </div>
    )
}

export default AppContact;