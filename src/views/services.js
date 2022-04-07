import React from 'react';
import { Card, Layout, Row, Col,Typography } from 'antd';
import {ReconciliationTwoTone,DollarTwoTone , EuroCircleTwoTone } from '@ant-design/icons';
const { Meta } = Card;
const {Content} = Layout;

const AppServices = () => {
    return (
      <div className="site-card-wrapper">
            <Content style={{margin:75, background:"#F8F8F8", paddingLeft:40}}>
            <Row gutter={16}>
            <Col span={8}>
                <Card 
                cover={<ReconciliationTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                style={{margin:20}}
                
                >
                <Meta title="OutSourcing of Bookkeeping"></Meta><br/>
                In the present economic environment, businesses need to keep expenses low and use as
                much efficiency as possible. The rise in the business process outsourcing (BPO) industry
                has contributed to the development of the market for it....
                </Card>
               </Col>
               <Col span={8}>
                <Card 
                cover={<DollarTwoTone  style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}}
                
                style={{  margin:20}}>
               <Meta title="Taxation"></Meta><br/>
                Our tax* and regulatory services add value to the clients by way of proper
                        understanding of the tax and regulatory issues and implications for the new ventures as
                        well as managing the tax matters for the running businesses in a fully compliant manner
                        in Nepal.... 
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                cover={<EuroCircleTwoTone  style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                style={{  margin:20}}>
                <Meta title="Audit and Assurance"></Meta><br/>
                We, along with the help of our associated auditing firm wherever necessary, maintain
                    the highest level of professionalism and quality control in the delivery of our audit and
                    assurance services. We adhere to the principles of independence, integrity, and due
                    professional care in every stage of our assignment....      
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                cover={<ReconciliationTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                style={{  margin:20}}>
                <Meta title="Registration"></Meta><br/>
                TBC provides services related to business and other mandatory registrations in Nepal
                for conducting your business...          
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                cover={<DollarTwoTone  style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                style={{  margin:20}}>
                <Meta title="Management Accounting"></Meta><br/>
                 TBC provides Management accounting which focuses on all accounting aimed at
                        informing management about operational business metrics... 
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                cover={<EuroCircleTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                  style={{  margin:20}}>
                  <Typography><Meta title="Corporate Policy Development"></Meta></Typography><br/>
                 TBC helps in the design and implementation of various policies in any company such
                    as Financial Policy, Human Resource Policy, Operational Policy, Asset Management
                    Policy, Information Technology Policy, and many other organizational specific policies. 
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                 cover={<ReconciliationTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                  style={{  margin:20}}>
                  <Meta title="Fixed Asset Management"></Meta><br/>
                  A highly capable team of fixed asset accountants from TBC handles fixed asset
                        management as per the requirement of the company. By choosing a fixed asset
                        management service provider like us you get peace of mind and more time to focus on
                        core functions.
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                 cover={<DollarTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                  style={{  margin:20}}>
                  <Meta title="Business Consulting"></Meta><br/>
                Our Business Consulting Services are structured to address a company’s end-to-end
                    business needs...
                </Card>
                </Col>
                <Col span={8}>
                <Card 
                 cover={<EuroCircleTwoTone style={{fontSize:70, marginTop:20}} twoToneColor="#FFA500"/>}
                bordered={true}
                bodyStyle={{minHeight: '30vh',maxHeight:'40vh'}} 
                  style={{  margin:20}}>
                  <Meta title="Others"></Meta><br/>
                  Various Training Packages related to Accounting, Taxation, Tally, and other business
                  utility.<br/>
                  Projection of Financial Statements 
                </Card>
                </Col>
                </Row>
            </Content>  
                        </div>
            
    );
};

export default AppServices;