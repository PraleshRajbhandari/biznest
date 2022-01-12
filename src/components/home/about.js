import React from 'react';
import {Row,Col} from 'antd';
import { PieChartTwoTone, DatabaseTwoTone , UsbTwoTone} from '@ant-design/icons';
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
                <p>dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <div className='contentHolder'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in 
                    laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci
                    quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! 
                    Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.
                </p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map((item,index)=>{
                    return(
                    <Col span={8} key={index}>
                        <div className='content' >
                            <div className='icon'>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    
                    </Col>
                    )}
                )}   
            </Row>
        </div>
    </div>
)
}

export default AppAbout;