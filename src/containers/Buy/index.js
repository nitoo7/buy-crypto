import React from 'react';
import { Link } from 'react-router-dom';
import './Buy.css';
import { Card, Input, Button } from 'antd';

class Buy extends React.Component {
  render() {
    return (
      <Card title="Buy Bitcoins" className="buy-card">
      <Input placeholder="Input Wallet Id" />
    </Card>
    );
  }
}

export default Buy;