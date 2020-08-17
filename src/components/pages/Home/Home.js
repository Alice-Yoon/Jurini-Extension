import React from 'react';
import styled from 'styled-components';

import DropDown from './Section/DropDown';
import Calendar from './Section/Calendar';
import CardList from '../../commons/CardList';

import { cardDummyData } from '../../../assets/dummy/cardDummyData';

function Home(props) {
    return (
        <div className={props.className}>
            <DropDown />
            <Calendar />
            <p className="date">21 Thu</p>
            <div className="card-container">
                {cardDummyData && cardDummyData.map(data => <CardList data={data} />)}
            </div>
        </div>
    )
}

export default styled(Home)`
    /* border: 2px solid green; */
    height: 478px;

    & {
        .date {
                /* border: 1px solid blue; */
                margin: 10px;
        }
        .card-container {
            /* border: 1px solid red; */
            height: 55%;
            padding: 5px 20px;
            overflow: auto;
        }
    }
`;
