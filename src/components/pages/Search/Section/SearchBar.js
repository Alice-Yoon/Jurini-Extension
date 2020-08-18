import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleCards, updateValue } from '../../../../modules/search';

// import search_icon from '../../../../assets/img/search_icon.png';

function SearchBar(props) {

    const [value, setValue] = useState('');
    
    const dispatch = useDispatch();
    const onToggleCards = (payload) => dispatch(toggleCards(payload));
    const onUpdateValue = (payload) => dispatch(updateValue(payload));

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onToggleCards(true);
        onUpdateValue(value);
    }

    const onClickEmpty = () => {
        setValue('');
    }

    return (
        <div className={props.className}>
            <form onSubmit={onSubmit}>
                <input 
                    value={value} 
                    onChange={onChange} 
                    onClick={onClickEmpty} 
                    placeholder="검색어를 입력하세요." 
                    className="search-bar" 
                    autoFocus={true} 
                />
            </form>
                {/* <img src={search_icon} alt="search_icon" className="icon_style" /> */}
        </div>
    )
}

export default styled(SearchBar)`
    /* border: 1px solid green; */
    text-align: center;

    & {
            .search-bar {
                width: 70%;
                padding: 10px;
                border-radius: 15px;
                border: 1px solid gray;
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
