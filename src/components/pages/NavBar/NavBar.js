import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import calendar_icon from '../../../assets/img/calendar_icon.png';
import introduction_icon from '../../../assets/img/introduction_icon.png';

function NavBar(props) {

    const [isHome, setIsHome] = useState(true);

    const toggleIsHome = () => {
        setIsHome(!isHome);
    }

    return (
        <div className={props.className}>
            <h1>주린이 달력</h1>
            {isHome ? 
                <Link to="/introduction">
                    <img src={introduction_icon} alt="introduction_icon" className="icon_style" onClick={toggleIsHome} />
                </Link>
                :
                <Link to="/">
                    <img src={calendar_icon} alt="calendar_icon" className="icon_style" onClick={toggleIsHome} />
                </Link>
            }
        </div>
    )
}

export default styled(NavBar)`
    /* border: 1px solid blue; */
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
            &:hover {
                cursor: pointer;
            }
        }
    }
`;
