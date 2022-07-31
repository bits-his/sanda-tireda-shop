import React from "react";
import "./search1.css";

export function SearchBarWithButton(props) {
    const {
        // placeholder = "Search",
        filterText = "",
        onFilterTextChange = (f) => f,
        _ref = null,
        onSearch = (f) => f
    } = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    };

    return (
        <div className="input-group mb-3">
            <input
                ref={_ref}
                type="text"
                className="form-control"
                name="filterText"
                aria-label="Amount (to the nearest dollar)"
                onChange={(e) => {
                    handleFilterTextChange(e);
                }}
                value={filterText}
                {...props}
            />
            <button
                className="input-group-text btn btn-primary bg-primary color-primary"
                style={{ cursor: "pointer" }}
                onClick={onSearch}
            >
                Search
            </button>
        </div>
        // <div className="input-group">
        //     <input
        //         ref={_ref}
        //         className='form-control'
        //         name="filterText"
        //         value={filterText}
        //         onChange={handleFilterTextChange}
        //         type="text"
        //         placeholder={placeholder}
        //         {...props}
        //     />
        //     <span className="input-group-text">
        //         <button className="btn btn-primary" >
        //             Search
        //         </button>
        //     </span>
        // </div>
    );
}
