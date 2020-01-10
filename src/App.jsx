import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Loading from './components/Loading'
import loadable from '@loadable/component'


const Home = loadable(() => import('./Home'), {
  fallback: <Loading />
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home />
  }
}

export default hot(App);
