import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleDetails } from '../../modules/details';

function CardList(props) {

    const [isDividendDate, setIsDividendDate] = useState(true);

    useEffect(() => {
        setIsDividendDate(props.data.isDividendDate);
    }, []);

    const dispatch = useDispatch();
    const openDetails = (payload) => dispatch(toggleDetails(payload));

    const onClick = () => {
        openDetails(true);
    }


    return (
        <div 
            className={props.className} 
            style={{ borderLeft: `2.5px solid ${isDividendDate ? 'green' : 'orange'}`}} 
            onClick={onClick}
        >
            <div className="leftSectionStyle">
                <span className="smallBoxStyle">
                    {isDividendDate ? '배당지급일' : '배당락일 D-3'}
                </span>
                <p className="companyNameStyle">Nike Inc</p>
            </div>
            <div className="rightSectionStyle">
                <div className="rightSection_Top">
                    <span>예상 배당금</span>
                </div>
                <div className="rightSection_Bottom">
                    <p className="expected_dividend">$ 2.7</p>
                    <span>배당률 5.2%</span>
                </div>
            </div>
        </div>
    )
}

export default styled(CardList)`
    border: 1.3px solid lightgray;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: #fff;
    /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); */
    padding: 10px 15px;
    display: flex;
    margin-bottom: 10px;

    & {
        .leftSectionStyle {
            /* border: 1px solid red; */
            flex: 1;
            .smallBoxStyle {
                border: 1px solid gray;
                padding: 2px 7px;
                font-size: 0.7rem;
                color: gray;
            }
            .companyNameStyle {
                font-size: 1.6rem;
                font-weight: bold;
                margin: 0;
                margin-top: 5px;
            }
        }
        .rightSectionStyle {
            /* border: 1px solid blue; */
            flex: 1.5;
            .rightSection_Top {
                /* border: 1px solid blue; */
                padding-left: 20px;
                font-size: 0.8rem;
            }
            .rightSection_Bottom {
                /* border: 1px solid yellow; */
                display: flex;
                align-items: center;
                justify-content: flex-end;

                > p {
                    font-size: 2rem;
                    font-weight: bold;
                    margin: 0;
                }
                >span {
                    font-size: 0.8rem;
                    margin-left: 7px;
                    padding-top: 10px;
                }
            }
        }
`;

