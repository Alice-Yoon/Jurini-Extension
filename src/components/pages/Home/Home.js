import React from 'react';
import styled from 'styled-components';
import DropDown from './Section/DropDown';

function Home(props) {
    return (
        <div className={props.className}>
            Home
            <DropDown />
        </div>
    )
}

export default styled(Home)`

`;
