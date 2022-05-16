import React from 'react';
import { Button} from 'antd';
import '../../App.css';
import { Link } from 'react-router-dom';

const AppHero = ()=>{
    return(
      
      <div className="heroBlock">
          <h3>The BizNest Consultancy</h3>
          <p>Adventure Starts Here</p>
          <div className="hero-btns">
            <Link to="/services"><Button type="primary" size='large' className='btn'>Click To Start</Button></Link>
          </div>
          </div>

  
    )
}

export default AppHero;