import React from 'react';
import './Home.css';
import { Input } from 'antd';
import Banner1 from '../../assets/banner_1.png';
import Banner2 from '../../assets/banner_2.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <img src={Banner1}></img>
        </div>
        <div>
          <img src={Banner2}></img>
        </div>
      </div>
    );
  }
}

export default Home;