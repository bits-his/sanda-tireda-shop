import React from "react";
import { FaSearch } from "react-icons/fa";
import { TextInput } from ".";
import "./search.css";

export default function SearchBar(props) {
    const {
        placeholder = "Search",
        filterText = "",
        onFilterTextChange = (f) => f,
        _ref = null
    } = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    };

    return (
        <div className="form-group has-search">
            <span className="form-control-feedback">
                <FaSearch />
            </span>
            <TextInput
                ref={_ref}
                name="filterText"
                value={filterText}
                onChange={handleFilterTextChange}
                type="text"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}


