import React, { Component } from 'react';
import utilsIndex from '@utils/index';
// import './style.scss';

class LoginPage extends Component {

  componentDidMount() {
    const id = utilsIndex.getUrlParam('id');
    console.log(id, 'id');

  }

  render() {
    return (
      <div className='box'>
        hello, React
        <span>here is login page.</span>
      </div>
    )
  }
}

export default LoginPage;