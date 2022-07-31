import React from "react";
import { Input, Label } from "reactstrap";
// import { themeClass } from "variables";

function CheckBoxLarge(props) {
    const {
        container = "",
        label = "",
        key = "1",
        onChange = (f) => f,
        name,
        value,
        checked=false
    } = props;

    return (
        <div className={`custom-control custom-checkbox ${container}`}>
            <Label
                // className="custom-control-label"
                // htmlFor={`${props.label}${props.name}-${key}`}
                check
            >
                <Input
                    // className="custom-control-input"
                    
                    id={`${props.label}${props.name}-${key}`}
                    type="checkbox"
                    onChange={onChange}
                    name={name}
                    value={value}
                    style={{width: 20, height: 20, borderRadius: 20}}
                    checked={checked}
                />
                <span className="ml-2">{label}</span>
            </Label>
        </div>
    );
}

export default CheckBoxLarge;
