import React, { Component } from 'react';

import Styles from './MySheetBody.module.css'

import Col from './MySheetBodyItem'

class MySheetBody extends Component {
    state = {
        dumy: [
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
            {
                No: 1,
                Name: "test",
                CompanyCd: 123,
                MGCd: 123,
                ASign: "test1",
                timetable: [1,2,3,4,5],
                Memo: "None"
            },
        ]
    }


    constructor(props) {
      super(props);
      
    }

    render() {
        
        return (
            <div className={Styles.sheetContainer}>
                <div className={""}>
                    Header Section
                </div>
                <div className={Styles.sheetBodyCountainer}>
                    {this.state.dumy.map((item,k) => 
                        <Col key={k} item={item} />
                    )}
                </div>
            </div>
        );
    }
  }
  
  export default MySheetBody;
