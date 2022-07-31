import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col } from "reactstrap";
import Label from "reactstrap/lib/Label";

export default function CustomTypeahead(props) {
    const {
        options,
        onInputChange,
        onChange,
        labelKey,
        label,
        placeholder,
        col,
        _ref
    } = props;
    return (
        <Col md={col || 4} className="m-0">
            <Label className="font-weight-bold">{label}</Label>
            <Typeahead
                id="basic-typeahead-single"
                labelKey={labelKey}
                onChange={onChange}
                onInputChange={onInputChange}
                options={options}
                placeholder={placeholder || ""}
                ref={_ref}
                className="border border-primary"
                {...props}
                style={{ borderRadius: 5 }}
            />
        </Col>
    );
}
