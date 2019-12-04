import React, { Component } from 'react';

import MySheetMenu from '../modules/MySheetBodyMenu'
import MySheetBody from '../modules/MySheetBody'

import Styles from './MySheet.module.css'

class MySheet extends Component {

    constructor(props) {
      super(props);
      
    }

    render() {
        
        return (
            <div className={Styles.container}>
                <div className={Styles.container}>
                    <MySheetMenu/>
                    <MySheetBody/>
                </div>
            </div>
        );
    }
  }
  
  export default MySheet;
