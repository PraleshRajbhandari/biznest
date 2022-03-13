import React from 'react';
import { Layout, Typography, Row, Col,Image } from 'antd';
import about4 from '../assets/images/about4.png';
const {Text} = Typography
const { Content } = Layout;

const AppAbout = ()=>{
    return(
      <div>
      <Row>
        <Col span={24} style={{height:'10vh', background:'coral',padding:20, margin:60,maxWidth:1200}}>
          <Typography style={{flexGrow: 1, textAlign: "center", fontSize:'20px', color:'grey'}}>About Us</Typography></Col>
      </Row> 
      <Content style={{margin:20}}>
      <Row gutter={[24, 8]}>
      <Col span={12}>
              <Text type="warning">
              <p>
              The Biznest Consultants Pvt. Ltd., a business consulting company is a leading
              Accounting and Consulting Firm of Nepal offering a wide range of services. At TBC, we
              focus primarily on Bookkeeping, Auditing, Advisory, Taxation, and Business
              Consultancy Services applying multi-disciplined expert knowledge of professionals of
              the related areas.
              </p>
            </Text>
            <Text type="warning">
              <p>
              TBC has a very scrupulous policy in accepting engagements and has a strong risk
              control system to ensure the independence of tasks to be accomplished. Truth and
              professional integrity associated with due care and diligence are its cardinal principles
              of service delivery. TBC takes professional ethics very seriously in practice.
              </p>
            </Text>
            <Text type="warning">
              <p>
              We enhance the value of our clients by focusing on solutions that are innovative, yet
              practical and that can be implemented. We do this by blending our expertise with an
              analytical approach while maintaining an uncompromising focus on quality and by hiring
              and nurturing high-quality professionals with a passion for excellence. We are
              committed to making a difference to our clients and to our people, and we deliver this
              difference through the integrity of our efforts and by living our core values. We add value
              beyond numbers.
              </p>
            </Text>
          </Col>
          <Col span={12}>
          <Image src={about4}/>
          </Col>
        </Row>
      </Content>
      </div>
    )
}

export default AppAbout;