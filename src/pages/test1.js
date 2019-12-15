import React, { Component } from 'react';

import Sample from '../components/Sample'

class Page extends Component {
    state = {
        dump: 3

    }

    constructor(props) {
      super(props);
      
    }
    increment = e => {
        console.log("test")
        return 1;
    }

    onClick = e => {
        console.log("test")
        this.setState({
            dump: 10
        })
    }

    render() {
        
        return (
            <div>
                test1
                <button onClick={this.onClick}>test btn</button>
                <Sample test={this.increment} init={3} />
            </div>
        );
    }
  }
  
  export default Page;
