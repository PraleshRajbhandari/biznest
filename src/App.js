import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Main from './views/main';

import {
  BrowserRouter,

} from "react-router-dom";
const {Content } = Layout;

function App() {
  return (
  <Layout className="mainLayout">
    <Content>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
      </Content>
  </Layout>
  );
}

export default App;
