import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import search_icon from '../../../../assets/img/search_icon.png'

function DropDown(props) {

    const onChangeSelect = (e) => {
        console.log("select changed!", e.target.value);
    }

    return (
        <div className={props.className}>
           <div>
               <select onChange={onChangeSelect} className="select_style">
                   <option value="option1">All</option>
                   <option value="option2">배당귀족</option>
                   <option value="queen">배당퀸/킹</option>
                   <option value="option1">리츠주</option>
                   <option value="option1">발악주</option>
                   <option value="finance">금융주</option>
               </select>
           </div>
           <Link to="/search">
               <img src={search_icon} alt="search_icon" className="icon_style" />
           </Link>
        </div>
    )
}

export default styled(DropDown)`
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 10px;

    & {
        .select_style {
            background-color: #C4C4C4;
            border: 1px solid #C4C4C4;
            border-radius: 15px;
            padding: 5px 15px;
            &:focus {
                outline: none;
            }
        }
        .icon_style {
            width: 40px;
            height: 40px;
        }
    }
`;