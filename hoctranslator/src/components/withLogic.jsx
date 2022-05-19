import React from 'react';

export const Logic = (OrigComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
        ip : "",
      };
    }
    
    incrementCount = (ipo,a) => {

      console.log(ipo);

      this.setState((prevState) => {

        return { ip : ipo };

        // if(a)
        // {
        //   return { count: prevState.count + 1 };
        // }
        // else
        // {
        //   return { count: prevState.count - 1 };      
        // }
        });
    };


    render() {
      return (
        <OrigComponent
          count={this.state.ip}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};
