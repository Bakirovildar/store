import React from "react";
import './Search.scss'

const Search = ({onChangeInput}) => {
    return (
        <div className="pb-5 ">
            <h4 className="m-text23 fw-bold pb-34">BlogSidebarSearch</h4>
            <input className='' type="text" onChange={event => onChangeInput(event)}/>
        </div>
    )
}

export default Search