import React from 'react';
import {Row,Col, Card} from 'antd';
import { Link } from 'react-router-dom';
import { PieChartTwoTone, DatabaseTwoTone , UsbTwoTone} from '@ant-design/icons';
import '../../App.css';
import bks from '../../assets/images/bks.jpg'
const { Meta } = Card;

const items = [
    {
      key: '1',
      icon: <PieChartTwoTone style={{fontSize:50}} />,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <DatabaseTwoTone  style={{fontSize:50}}  />,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <UsbTwoTone style={{fontSize:50}} />,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

const AppAbout=()=>{
return(
    <div className='block aboutblock '>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>About</h2>
                <p>Better Consultancy</p>
            </div>
            <div className='contentHolder'>
                <p>
                The Biznest Consultants Pvt. Ltd., a business consulting company is a leading
                Accounting and Consulting Firm of Nepal offering a wide range of services.
                 At TBC, we focus primarily on Bookkeeping, Auditing, Advisory, Taxation, and Business
                Consultancy Services applying multi-disciplined expert knowledge of professionals of
                the related areas.
                <br/>
                <Link to="/about">Read More...</Link>
                </p>
            </div>
            <div className='titleHolder'>
                <h2>Team</h2>
                <p>Team Members Include Highly Motivated and Energetic Individuals</p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map((item,index)=>{
                    return(
                    <Col span={8} key={index}>
                       <Card
                       hoverable
                        cover={<img alt="example" src={bks}/>}
                    >
                        <Meta title="CTO" description="Bikesh Shrestha" />

                       </Card>
                    
                    </Col>
                    )}
                )}   
            </Row>
            </div>
        </div>
)
}

export default AppAbout;