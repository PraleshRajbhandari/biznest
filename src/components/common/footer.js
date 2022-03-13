import React from 'react';
import { Layout,List,Typography , Space, Row, Col, Divider } from 'antd'
import { Link } from 'react-router-dom';
const {  Footer } = Layout;

const { Title,Text } = Typography;
const FooterComponent = () => {

    return (
        <div>
                <Footer style={{maxHeight:'50vh'}}>
                    <Row gutter={[8, 8]}>
                        <Col span={8}><Title level={3}style={{color:"coral"}}>Links</Title></Col>
                        <Col span={8}><Title level={3}style={{color:"coral"}}>Address</Title></Col>
                        <Col span={8}><Title level={3}style={{color:"coral"}}>Services</Title></Col>
                    </Row> 
                    <Row gutter={[8, 8]}>
                        <Col span={8}><Link to="/home"><Text  type='warning'>Home</Text></Link></Col>
                        <Col span={8}><Text type='warning'>Sinamangal</Text></Col>
                        <Col span={8}><Text type='warning'>Outsourcing of Bookkeeping &amp; Financial Services.</Text></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={8}><Link to="/about"><Text type="warning">About</Text></Link></Col>
                        <Col span={8}><Text type='warning'>Kathmandu, Nepal</Text></Col>
                        <Col span={8}><Text type='warning'>Taxation</Text></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                    <Col span={8}><Link to="/about"><Text type="warning">Contact</Text></Link></Col>
                        <Col span={8}><Text type='warning'>9860452256</Text></Col>
                        <Col span={8}><Text type='warning'>Audit and Assurance Services</Text></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={8}><Link to="/services"><Text type='warning'>Services</Text></Link></Col>
                        <Col span={8}><Text type='warning'></Text></Col>
                        <Col span={8}><Text type='warning'>Registration Services</Text></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={8}><Text><Link to="#"></Link></Text></Col>
                        <Col span={8}><Text type='warning'></Text></Col>
                        <Col span={8}><Text type='warning'>Management Accounting & More </Text></Col>
                    </Row>
                    <Row gutter={[48, 16]}>
                    <Col span={24}><Title level={2} style={{color:'coral'}}> BizNest Consultancy Pvt. Ltd.</Title> </Col>
                    </Row>
                </Footer>
        </div>
    );
};

export default FooterComponent;