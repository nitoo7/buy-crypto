import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
const FormItem = Form.Item;

class HeaderContent extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="header-container">
          <div className="header-icn">
          <Link to={'/'}>
              BuyCrypto
            </Link>
          </div>
          <div className="header-links">
            <div>
              <Link to={'/profile/'}>
                Profile
              </Link>
            </div>
            <div>
              <Link to={'/buy'}>
                Buy
              </Link>
            </div>
            <div>
              <Link to={'/sell'}>
                Sell
              </Link>
            </div>
            <div>
              <Link to={'/about'}>
                About
              </Link>
            </div>
          </div>
          <div className="header-btns">
            <Button type="primary"><Link to={'/register'}>Register</Link></Button>
            <Button type="primary" className="login-btn" onClick={this.showModal}>Log In</Button>
          </div>
          <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
        >
            <Form onSubmit={this.handleOk} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(HeaderContent);