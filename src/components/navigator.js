import React, { Component } from 'react';
import { Link } from "react-router-dom";
  
class Page extends Component {

    constructor(props) {
      super(props);
      
    }

    render() {
        
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/test1">Test1</Link>
                    </li>
                    <li>
                        <Link to="/test2">Test2</Link>
                    </li>
                    <li>
                        <Link to="/p/test/1">Test</Link>
                    </li>
                </ul>
            </div>
        );
    }
  }
  
  export default Page;
