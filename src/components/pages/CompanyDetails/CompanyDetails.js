import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DetailsCard from './Section/DetailsCard';
import DetailsTable from './Section/DetailsTable';
import DetailsChart from './Section/DetailsChart';
import DetailsCalculator from './Section/DetailsCalculator';
import DetailsNews from './Section/DetailsNews';

function CompanyDetails(props) {
    // const { showCompanyDetails, toggleCompanyDetails } = props;
    const [showCompanyDetails, setShowCompanyDetails] = useState(true);


    const onClickToClose = (e) => {
        const id = e.target.id;

        if(id === "closeBtn" || id === "container") {
            // console.log("click to close!", e.target.id);
            // toggleCompanyDetails();
        }
    }


    return (
        <div className={props.className} id="container" 
            // style={{display: `${showCompanyDetails ? 'flex' : 'none' }`}} 
            onClick={onClickToClose}
        >
            <p id="closeBtn" onClick={onClickToClose} className="closeBtnStyle">X</p>
            <div className="contentStyle">
                <h1>Nike Inc (NKE)</h1>
                <DetailsCard />
                <DetailsTable />
                <DetailsCalculator />
                <DetailsChart />
                <DetailsNews />
            </div>
        </div>
    )
}

export default styled(CompanyDetails)`
    /* border: 2px solid green; */
    height: 478px;

    & {
        .closeBtnStyle {
            /* border: 1px solid red; */
            cursor: pointer;
            text-align: end;
            padding-right: 10px;
            margin: 0;
            font-weight: bold;
        }
        .contentStyle {
            /* border: 1px solid blue; */

            margin: 30px 15px 0 15px;
            height: 90%;
            overflow: auto;

            > h1 {
                position: sticky;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #fff;
                text-align: center;
                margin-bottom: 50px;
            }
            
        }
        
    }
`;