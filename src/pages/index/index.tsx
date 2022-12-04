import React, { Component } from 'react';
import { Button } from 'antd';
// import './style.scss';

class IndexPage extends Component {
  render() {
    return (
      <div className='box'>
        hello, React
        <span>here is index page.</span>
        <Button type="primary">antd</Button>
      </div>
    )
  }
}

export default IndexPage;