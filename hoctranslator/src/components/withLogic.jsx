import React from 'react';

export const Logic = (OrigComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
        ip : "",
        ans : "",
      };
    }


    translateOup = async (ipo,e) => 
    {     
      const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
          q: ipo,
          source: "auto",
          target: e,                    
      }),
      headers: { "Content-Type": "application/json" },
      });

      let data = await res.json();    

      this.setState((prevState) => {
        return { ans : data.translatedText };      
      });
    }
    
    incrementCount = (ipo,a) => {

      // console.log(a);

      this.translateOup(ipo,a);

      console.log(this.state.ans);
     
      this.setState((prevState) => {
        return { ip : ipo };      
      });
    };


    render() {
      return (
        <OrigComponent
          count={this.state.ans}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};
