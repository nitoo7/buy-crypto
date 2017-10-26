import React from 'react';
import './FormPersonal.css';
import { Input } from 'antd';

class FormPersonal extends React.Component {
  render() {
    return (
      <div className="form-personal">
        <Input placeholder="Email" />
        <Input placeholder="User Name" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Input placeholder="Nick Name" />
        <Input placeholder="Contact no:" />
      </div>
    )
    ;
  }
}

export default FormPersonal;