import React from 'react';
import {Logic} from './withLogic';

class ClickCounter extends React.Component {
  constructor()
  {
    super();
    this.state = {
      ip : "",
    }
  } 

  
  a = "de";
  
  render() 
  {
    // console.log(this.state.ip) 

    return (
      <div>
        <h3>{this.props.count}</h3>
        <div className='ip'>
          <input type={'text'} onChange={(e) => this.setState({ ip: e.target.value })} />
        </div>
        <br />
        <button onClick={() => this.props.incrementCount(this.state.ip,this.a)}>German</button>
      </div>
    );
  }
}
export default Logic(ClickCounter);