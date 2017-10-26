import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Card } from 'antd';

class Profile extends React.Component {
  render() {
    return (
      <Card title="About Page" className="sell-card">
      <p>About details will be displayed here....</p>
    </Card>
    );
  }
}

export default Profile;