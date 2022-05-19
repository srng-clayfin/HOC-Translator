import React from 'react';
import {Logic} from './withLogic';

class ClickCounter extends React.Component {
    a = false;
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.incrementCount(this.a)}>Decrement</button>
      </div>
    );
  }
}
export default Logic(ClickCounter);