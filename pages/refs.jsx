import React from 'react';
import Router from 'next/router';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      console.log(res);
      res.writeHead(302, {
        Location: '/react-refs-evolution',
      });
      res.end();
    } else {
      Router.push('/react-refs-evolution');
    }
    return {};
  }
}
