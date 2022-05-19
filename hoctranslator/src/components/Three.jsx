import React from 'react';
import {Logic} from './withLogic';

class ClickCounter extends React.Component {
    a = false;
  render() {
    return (
        <div>
        <div className='ip'>
          <input type={'text'} />
        </div>
        <br />
        <button onClick={() => this.props.incrementCount(this.a)}>Arabic</button>
      </div>
    );
  }
}
export default Logic(ClickCounter);