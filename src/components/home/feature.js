import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/bg-works.jpg';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const AppFeature = () =>{
    return(
        <div className='block featureBlock bgGray'>
            <div className='titleHolder'>
                <h2>Key Services</h2>
                <p>We Provide Services Related To Accounting, Counsulting and
                    <Link to="/services">{" "}More</Link>
                </p>
            </div>
            <div className='container-fluid-main'>
            <Row gutter={[16, 16]}>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Modern Design" src={image1}/>}
                        >
                        <Meta title="Outsourcing of Bookkeeping &amp; Financial Services." />
                    </Card>
                </Col>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Clean Design" src={image2}/>}
                        >
                        <Meta title="Taxation (Direct &amp; Indirect)" />
                    </Card>
                </Col>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Great Support" src={image3}/>}
                        >
                        <Meta title="Audit and Assurance Services" />
                    </Card>
                </Col>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Easy Customise" src={image4}/>}
                        >
                        <Meta title="Registration Services" />
                    </Card>
                </Col>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Unlimited Features" src={image5}/>}
                        >
                        <Meta title="Management Accounting" />
                    </Card>
                </Col>
                <Col span={8} > 
                    <Card
                        hoverable
                        cover={<img alt="Bg Works" src={image6}/>}
                        >
                        <Meta title="Corporate Policy Development" />
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default AppFeature