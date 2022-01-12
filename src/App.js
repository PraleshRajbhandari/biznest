import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Appheader from './components/common/header';
import AppHome from './views/home';
const { Header,Content } = Layout;

function App() {
  return (
  <Layout className="mainLayout">
    <Header>
      <Appheader/>
    </Header>
    <Content>
        <AppHome/>
    </Content>
  </Layout>
  );
}

export default App;
