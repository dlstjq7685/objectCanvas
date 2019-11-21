import React, { Component } from 'react';

import Menus from './ObjectCanvasMenu'
import Styles from './ObjectCanvas.module.css'

class Canvas extends Component {

    constructor(props) {
      super(props);
      
    }

    render() {
        
        return (
            <div>
                <div className={Styles.menu}>
                    <Menus/>
                </div>
              <div className={Styles.canvas}>
                test Canvas
              </div>
            </div>
        );
    }
  }
  
  export default Canvas;
