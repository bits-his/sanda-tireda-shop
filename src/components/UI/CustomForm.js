import React from "react";
import { Row, Col } from "reactstrap";
import TextInput from "components/UI/TextInput";
import { RadioGroup, SelectInput } from ".";
import Checkbox from "./CheckBox";
import SwitchButton from "hooks/Switch";

function CustomForm({
    fields = [],
    colClass = "",
    rowClass = "m-0",
    handleChange = (f) => f,
    handleRadioChange = (f) => f,
    handleSelect = (f) => f,
    errors = {}
}) {
    return (
        <Row className={rowClass}>
            {fields.map((el, i) => {
                if (el.type && el.type === "select") {
                    return (
                        <Col
                            md={{ size: el.col || 4, offset: el.offset || "" }}
                            key={i}
                            // className={colClass}
                        >
                            <SelectInput
                                label={el.label}
                                name={el.name}
                                value={el.value}
                                options={el.options || []}
                                required={el.required}
                                disabled={el.disabled}
                                onChange={
                                    el.handleChange
                                        ? el.handleChange
                                        : handleChange
                                }
                                error={errors[el.name]}
                            />
                        </Col>
                    );
                } else if (el.type === "null") {
                    return null;
                } else if (el.type && el.type === "radio") {    
                    return (
                        <Col
                            md={{ size: el.col || 4, offset: el.offset || "" }}
                            key={i}
                            // className={colClass}
                        >
                            <RadioGroup
                                container="d-flex flex-row"
                                label={el.label}
                                name={el.name}
                                options={el.options}
                                onChange={handleRadioChange}
                                value={el.value}
                            />
                        </Col>
                    );
                } else if (el.type && el.type === "checkbox") {
                    return (
                        <Col
                            md={{ size: el.col || 4, offset: el.offset || "" }}
                            key={i}
                            // className={colClass}
                        >
                            <Checkbox
                                container="d-flex flex-row"
                                label={el.label}
                                name={el.name}
                                options={el.options}
                                onChange={handleRadioChange}
                                value={el.value}
                                // checked={el.name}
                            />
                        </Col>
                    );
                } else if (el.type && el.type === "custom") {
                    return (
                        <Col
                            className={el.container}
                            md={{ size: el.col || 4, offset: el.offset || "" }}
                            key={i}
                        >
                            {el.component(el)}
                        </Col>
                    );
                } else if (el.type === "switch") {
                    return <SwitchButton />;
                } else if (el.type === "switch") {
                    return (
                        <input type="hidden" name={el.name} value={el.value} />
                    );
                } else {
                    return (
                        <Col
                            md={{ size: el.col || 4, offset: el.offset || "" }}
                            key={i}
                            // className={colClass}
                        >
                            <TextInput
                                {...el}
                                label={el.label}
                                type={el.type || "text"}
                                name={el.name}
                                placeholder={el.placeholder}
                                value={el.value}
                                required={el.required}
                                disabled={el.disabled}
                                onChange={
                                    el.handleChange
                                        ? el.handleChange
                                        : handleChange
                                }
                                error={errors[el.name]}
                            />
                            {/* {JSON.stringify(el.required)} */}
                        </Col>
                    );
                }
            })}
        </Row>
    );
}

export default CustomForm;
