import React from 'react';

export const Logic = (OrigComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    
    incrementCount = (a) => {

      this.setState((prevState) => {
        if(a)
        {
          return { count: prevState.count + 1 };
        }
        else
        {
          return { count: prevState.count - 1 };      
        }
        });
    };


    render() {
      return (
        <OrigComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};
