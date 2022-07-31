import React from "react";
import { Input, Label, FormGroup } from "reactstrap";
import { checkStrEmpty } from "utils";
// import { secondaryColor } from "variables";

function TextInput(props) {
    const {
        label,
        required = false,
        className = null,
        container = null,
        loading = false,
        good = false,
        message = "",
        error = null
    } = props;

    return (
        <FormGroup className={container}>
            {!checkStrEmpty(label) && (
                <Label className="font-weight-bold">
                    {label}
                    {required && <span className="text-danger">*</span>}
                </Label>
            )}
            <Input
                className={`form-control-alternative border border-primary ${className}`}
                // style={{ border: `1px solid ${secondaryColor}`, ...props.style }}
                {...props}
            />
            {loading && <span className="text-success">please wait...</span>}
            {message !== "" && (
                <span className={good ? "text-primary" : "text-danger"}>
                    {message}
                </span>
            )}
            {!checkStrEmpty(error) && (
                <span className="text-danger">{error}</span>
            )}
        </FormGroup>
    );
}

export default TextInput;
