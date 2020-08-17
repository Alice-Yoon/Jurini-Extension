import React from 'react';
import styled from 'styled-components';

import calendar_half from '../../../../assets/img/calendar_half_dummy.png';

function Calendar(props) {
    return (
        <div className={props.className}>
            <img src={calendar_half} alt="calendar_half" className="calendar_style" />
        </div>
    )
}

export default styled(Calendar)`
    /* border: 1px solid salmon; */

    & {
        .calendar_style {
            width: 100%;
            height: 100%;
        }
    }
`;
