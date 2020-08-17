import React, {useState} from 'react';
import styled from 'styled-components';

import calendar_icon from '../../../assets/img/calendar_icon.png';
import introduction_icon from '../../../assets/img/introduction_icon.png';

function NavBar(props) {

    const [isHome, setIsHome] = useState(true);

    return (
        <div className={props.className}>
            <h1>주린이 달력</h1>
            <img src={ isHome? introduction_icon : calendar_icon } alt="icon" className="icon_style" />
        </div>
    )
}

export default styled(NavBar)`
    border: 1px solid blue;
    background-color: #D3D3D3;
    padding-right: 20px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & {
        h1 {
            font-size: 25px;
        }
        .icon_style {
            width: 40px;
            height: 40px;
        }
    }
`;
