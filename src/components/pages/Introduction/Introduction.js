import React from 'react';
import styled from 'styled-components';

import introduction_dummy from '../../../assets/img/introduction_dummy.png';

function Introduction(props) {
    return (
        <div className={props.className}>
            <img src={introduction_dummy} alt="introduction_dummy" className="dummy_style" />
        </div>
    )
}

export default styled(Introduction)`
    /* border: 2px solid green; */
    height: 478px;

    & {
        .dummy_style {
            width: 100%;
            height: 90%;
        }
    }
`;
