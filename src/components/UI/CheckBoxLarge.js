import React from "react";
import { Input, Label } from "reactstrap";
// import { themeClass } from "variables";

function Checkbox(props) {
    const {
        container = "",
        label = "",
        key = "1",
        onChange = (f) => f,
        name,
        value
    } = props;

    return (
        <Label
            style={{
                fontSize: "18px",
                marginTop: "5px",
                fontWeight: "bold"
            }}
            className="ml-2"
        >
            <input
                // id={`${props.label}${props.name}-${key}`}
                type="checkbox"
                // className="form-check-input"
                style={{
                    height: "20px",
                    width: "20px"
                }}
                name={name}
                value={value}
                onChange={onChange}
            />
            <span className="mx-2">{label}</span>
        </Label>
    );
}

export default Checkbox;
