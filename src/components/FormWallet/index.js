import React from 'react';
import './FormWallet.css';
import { Input } from 'antd';

class FormWallet extends React.Component {
  render() {
    return (
      <div className="form-wallet">
        <Input placeholder="Wallet Id" />
        <Input placeholder="somethin..." />
        <Input placeholder="something..." />
      </div>
    )
    ;
  }
}

export default FormWallet;