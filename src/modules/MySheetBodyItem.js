import React, { Component } from 'react';

import Styles from './MySheetBodyItem.module.css'

class MySheetBodyItem extends Component {
    state = {
        keys: []
    }

    constructor(props) {
      super(props);

    }
    
    componentDidMount = e => {
        this.testItem(this.props.item)        
    }

    testItem = e => {
        console.log(e)
        
        let keys = Object.keys(e)

        this.setState({
            keys: keys
        })
        console.log(keys)
        console.log(e[`${keys[0]}`])

        
    }

    render() {
        
        return (
            <div className={Styles.item}>
                {this.state.keys.map((item, k) => 
                    <div className={Styles.itemContainer} key={k}>
                        {this.props.item[`${item}`]}
                    </div>
                )}
            </div>
        );
    }
  }
  
  export default MySheetBodyItem;
