import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Main from './views/main';

import {
  BrowserRouter,

} from "react-router-dom";
const {Content} = Layout;

function App() {
  return (
    <Content>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
</Content>
   
  );
}

export default App;
