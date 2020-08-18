import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import SearchBar from './Section/SearchBar';
import CardList from '../../commons/CardList';

import back_key from '../../../assets/img/back_key.png';
import { cardDummyData } from '../../../assets/dummy/cardDummyData';
import DefaultCard from './Section/DefaultCard';

function Search(props) {

    const [searchResults, setSearchResults] = useState(false);

    return (
        <div className={props.className}>
            <Link to="/">
                <img src={back_key} alt="back_key" className="icon_style" />
            </Link>
            <SearchBar />
            {searchResults ? 
                <div className="card-container">
                    {cardDummyData && cardDummyData.map(data => <CardList data={data} />)}
                </div>
                    :
                <div className="card-container">
                    <DefaultCard />
                </div>
                }
        </div>
    )
}

export default styled(Search)`
    /* border: 2px solid green; */
    height: 478px;

    & {
        .icon_style {
            width: 40px;
            height: 40px;
        }
        .card-container {
            /* border: 1px solid red; */
            height: 75%;
            padding: 20px;
            overflow: auto;
        }
    }
`;
