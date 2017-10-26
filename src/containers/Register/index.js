import React from 'react';
import './Register.css';
import FormPersonal from '../../components/FormPersonal';
import FormUploads from '../../components/FormUploads';
import FormWallet from '../../components/FormWallet';
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'Personal Details',
  content: <FormPersonal />,
}, {
  title: 'Upload Id',
  content: <FormUploads />,
}, {
  title: 'Wallet Details',
  content: <FormWallet />,
}];

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="register-container">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => {message.success('Registration complete!');this.props.history.push('/');}}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button className="prev-btn" onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default Register;