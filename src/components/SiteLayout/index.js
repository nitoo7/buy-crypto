import React from 'react';
import Layout from 'antd/lib/layout';
import './SiteLayout.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HeaderContent from '../../containers/HeaderContent';
import Home from '../../containers/Home'
import Profile from '../../containers/Profile';
import Buy from '../../containers/Buy';
import Sell from '../../containers/Sell';
import About from '../../containers/About';
import Register from '../../containers/Register';
const { Header, Content, Footer } = Layout;


class SiteLayout extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header className='header-wrapper'>
            <HeaderContent />
          </Header>
          <Content className='content-wrapper'>
            <Switch>
              <Route exact path='/'
                component={Home}/>
              <Route path='/profile'
                component={Profile}/>
              <Route exact path='/buy'
                component={Buy}/>
              <Route path='/sell'
                component={Sell}/>          
              <Route exact path='/about'
                component={About}/>
              <Route path='/register'
                component={Register}/>            
            </Switch>
          </Content>
          <Footer className='footer'>
            © BuyCrypto 2008 - 2017. All Rights Reserved
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default SiteLayout;
