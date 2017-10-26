import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { Card } from 'antd';

class Profile extends React.Component {
  render() {
    return (
      <Card title="Profile Page" className="sell-card">
      <p>profile details will be displayed here....</p>
    </Card>
    );
  }
}

export default Profile;