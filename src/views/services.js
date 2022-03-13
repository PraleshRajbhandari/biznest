import React from 'react';
import { Card, Layout, Row, Col,Typography } from 'antd';

const {Content} = Layout;
const AppServices = () => {
    return (
        <div>
        <Row>
        <Col span={24} style={{height:'10vh', background:'coral',padding:20, margin:60,maxWidth:1250, marginBottom:0}}>
          <Typography style={{flexGrow: 1, textAlign: "center", fontSize:'20px', color:'grey'}}>Services</Typography></Col>
      </Row>
            <Content style={{margin:75, background:"#B0B0B0", paddingLeft:40}}>
            <Row gutter={24}>
            <Col span={12}>
                <Card 
                title="Outsourcing of Bookkeeping & Financial Services." 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                style={{ width: 450, margin:20}}
                >

                    <p>In the present economic environment, businesses need to keep expenses low and use as
                    much efficiency as possible. The rise in the business process outsourcing (BPO) industry
                    has contributed to the development of the market for it.
                    Newly established businesses may not have enough resources, budget, and expertise for
                    bookkeeping, documentation &amp; financial planning. In this scenario, outsourcing certain
                    tasks is critical, with the option to draw on the outsource service when needed.
                    At TBC, we provide a wide variety of BPO services that match the specific requirements
                    of our customers. Managers may use our services and concentrate on their area of
                    expertise while transferring critical accounting and compliance duties to us.
                    <ul>
                    <li> Reviewing, Designing, and Implementation of Accounting Systems</li>
                    <li>Bookkeeping Services</li>
                    <li>Payroll Accounting</li>
                    <li> Documentation</li>
                    <li> Financial Planning &amp; Assistance</li>
                    </ul>
                    </p> 
                </Card>
               </Col>
               <Col span={12}>
                <Card 
                title="Taxation (Direct &amp; Indirect)" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                style={{ width: 450, margin:20}}>
                    <p>Our tax* and regulatory services add value to the clients by way of proper
                        understanding of the tax and regulatory issues and implications for the new ventures as
                        well as managing the tax matters for the running businesses in a fully compliant manner
                        in Nepal.
                        We wholly assist our clients in the maintenance of documents, preparation, and review
                        of returns and filing with appropriate authorities. Our services include:
                    <ul>
                    <li> Representation in Tax Authorities</li>
                    <li>Facilitation to clients on tax-related matters</li>
                    <li>Submission of Returns</li>
                    <li> Tax Planning</li>
                    <li>International Taxation and DTAA</li>
                    </ul>
                    *Tax includes various taxes such as Income-tax (IRD), VAT, Excise Duty, Customs Duty,
                    and others (if any) for conducting business activities in Nepal.
                    </p>
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Audit and Assurance Services" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                style={{ width: 450, margin:20}}>
                    <p>We, along with the help of our associated auditing firm wherever necessary, maintain
                    the highest level of professionalism and quality control in the delivery of our audit and
                    assurance services. We adhere to the principles of independence, integrity, and due
                    professional care in every stage of our assignment. Our audit and assurance services
                    include:
                    <ul>
                    <li> Various Audits</li>
                    <li>Compliance and Special Purpose Audits (Audit or Agreed- upon procedures on behalf
                    of donors of projects with international funding, Performance audit of projects)</li>
                    <li>Internal Control System Study and Evaluation</li>
                    <li> Information System Audit</li>
                    </ul>
                    </p>                
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Registration Services" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                style={{ width: 450, margin:20}}>
                    <p>TBC provides services related to business and other mandatory registrations in Nepal
                        for conducting your business.
                    <ul>
                    <li> Company Registration (OCR)</li>
                    <li>Department of Commerce (Banijya)</li>
                    <li>Department of Cottage and Small Industries (Gharelu)</li>
                    <li>Department of Industry (Udhyog darta)</li>
                    <li>Ward Registration</li>
                    <li> Income Tax Registration (IRD)(PAN/VAT/EXCISE) and many more.
                    Registration</li>
                    <li> Industrial Properties like Patent, Design, and Trademark  </li>
                    </ul>
                    </p>               
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Management Accounting" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                  style={{ width: 450, margin:20}}>
                    <p>TBC provides Management accounting which focuses on all accounting aimed at
                        informing management about operational business metrics.
                        Management accounting is the process of preparing reports about business operations
                        that help managers make short-term and long-term decisions. It helps a business pursue
                        its goals by identifying, measuring, analyzing, interpreting, and communicating
                        information to managers.
                        Services/Tasks of Management Accountants:
                    <ul>
                    <li>  Managerial consultancy</li>
                    <li>Financial report analysis</li>
                    <li>Cost analysis</li>
                    <li>Business metrics development</li>
                    <li>Price modeling</li>
                    <li> Product profitability</li>
                    <li>Geographic vs. industry or client segment reporting  </li>
                    <li>Sales management scorecards  </li>
                    <li>Cost-benefit analysis </li>
                    <li>Cost-volume-profit analysis </li>
                    <li>Life cycle cost analysis </li>
                    <li> Client profitability analysis </li>
                    <li>IT cost transparency</li>
                    <li> Buy vs. lease analysis</li>
                    <li>Strategic planning</li>
                    <li>Strategic management advice</li>
                    <li>Internal financial report presentation and communication</li>
                    <li>Sales forecasting</li>
                    <li>Capital Budgeting</li>
                    <li>Financial forecasting</li>
                    <li>Annual budgeting</li>
                    <li>Cost allocation</li>
                    <li> Managerial decision making</li>
                    </ul>
                    </p>  
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Corporate Policy Development:" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                  style={{ width: 450, margin:20}}>
                    <p>TBC helps in the design and implementation of various policies in any company such
                    as Financial Policy, Human Resource Policy, Operational Policy, Asset Management
                    Policy, Information Technology Policy, and many other organizational specific policies.
                    </p>  
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Fixed Asset Management Services" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                  style={{ width: 450, margin:20}}>
                    <p>A highly capable team of fixed asset accountants from TBC handles fixed asset
                        management as per the requirement of the company. By choosing a fixed asset
                        management service provider like us you get peace of mind and more time to focus on
                        core functions. Our fixed asset management services include
                        <ul>
                            <li>Preparation of Fixed Asset Register (FAR)</li>
                            <li>Asset Tagging</li>
                            <li>Asset Verification</li>
                            <li>Asset Reconciliation</li>
                            <li>Asset Acquisition and transfer policy</li>
                        </ul>
                    </p>  
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Business Consulting Services" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                  style={{ width: 450, margin:20}}>
                    <p>Our Business Consulting Services are structured to address a company’s end-to-end
                    business needs. We provide comprehensive services to support your business by
                    leveraging strategy to drive people, processes, information, and technology
                    considerations. Our services methodology begins with discovery workshops to identify
                    high-level challenges, businesses, business drivers, and desired business impact.
                    Our team of consultants, certified auditors, technicians, experts are always ready to
                    help and consult in the most effective manner possible.
                    </p>  
                </Card>
                </Col>
                <Col span={12}>
                <Card 
                title="Others" 
                bordered={true}
                bodyStyle={{overflowY:'scroll',maxHeight: '30vh'}} 
                  style={{ width: 450, margin:20}}>
                    <p>
                        <ul>
                            <li>Various Training Packages related to Accounting, Taxation, Tally, and other business
                            utility.</li>
                            <li>Projection of Financial Statements</li>
                            <li>Preparation &amp; review of the compliance manual</li>
                            <li>Standard Operating Procedures (SOP) Design &amp; Implementation</li>
                            <li>Business forecasts for startups</li>
                            <li>Accounting software and ERP Integration in Business.</li>
                            <li>Business startup advice and planning</li>
                            <li>Project and Portfolio Management</li>
                        </ul>
                    </p>  
                </Card>
                </Col>
                </Row>
            </Content>  
                        </div>
            
    );
};

export default AppServices;