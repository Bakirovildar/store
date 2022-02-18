import React from "react";
import './Search.scss'

const Search = ({onChangeInput}) => {
    return (
        <div className='search'>
            <h4 className="m-text23 fw-bold pb-34">BlogSidebarSearch</h4>
            <div className='search_input'>
                <input className='' type="text" onChange={event => onChangeInput(event)} placeholder='search...'/>
            </div>
        </div>
    )
}

export default Search