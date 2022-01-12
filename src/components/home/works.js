import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons'
const AppWorks = ()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
        return(
          <div className='block worksBlock'>
              <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>How It Works</h2>
                    <p> Put another way, the Generator will yield plain Objects containing instructions</p>
                </div>
                <div className='contentHolder'>
                    <Button type="primary" onClick={showModal}>
                        <PlayCircleOutlined size='large' />
                    </Button>
                </div>
                <Modal title="WooCommerce Tutorial" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/DxNu1tVksqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
               </div>
          </div>
        )
    }

export default AppWorks;