import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { StockFilings } from './components/StockFilings';
import { Counter } from './components/Counter';
import { Stocks } from './components/Stocks';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/filings-data' component={StockFilings} />
        <Route path='/stocks' component={Stocks} />
      </Layout>
    );
  }
}
