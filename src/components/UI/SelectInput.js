import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { checkStrEmpty } from "utils";

function SelectInput(props) {
    const { label, options, className, container, required } = props;
    return (
        <FormGroup className={container}>
            {label && label !== "" ? (
                <>
                    <Label className="font-weight-bold">{label}</Label>
                    {required && <span className="text-danger">*</span>}
                </>
            ) : null}
            <Input
                type="select"
                className={`form-control-alternative border border-primary ${className}`}
                {...props}
            >
                <option>--select--</option>
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </Input>
            {!checkStrEmpty(props.error) && (
                <span className="text-danger">{props.error}</span>
            )}
        </FormGroup>
    );
}

export default SelectInput;
