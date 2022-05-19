import React from 'react';

import {Logic} from './withLogic';

class BlurCounter extends React.Component {
    a = true;
    render() {
    return (
      <div>
      <div className='ip'>
        <input type={'text'} />
      </div>
      <br />
      <button onClick={() => this.props.incrementCount(this.a)}>Hindi</button>
    </div>
    );
  }
}
export default Logic(BlurCounter);