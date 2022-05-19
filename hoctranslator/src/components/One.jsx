import React from 'react';

import {Logic} from './withLogic';

class BlurCounter extends React.Component {
    a = true;
    render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.incrementCount(this.a)} >Increment</button>
      </div>
    );
  }
}
export default Logic(BlurCounter);