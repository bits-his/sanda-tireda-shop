import React, { useState } from "react";
import { Button, Col, Input, Label, Modal } from "reactstrap";
import { primaryColor } from "variables";
// import Checkbox from "./CheckBox";

function CustomModal(props) {
    const {
        toggle = (f) => f,
        isOpen = false,
        title = "",
        color = "primary",
        submitText = "",
        handleSubmit = (f) => f,
        save = "",
        handleSave = (f) => f,
        customNotify = true,
        size = "md",
        contentClassName = "bg-gradient-primary",
        header = "Success"
    } = props;
    const [data, setData] = useState([]);
    let notify = ["Send SMS", "Send Email"];

    const handleCheck = (item) => {
        if (data.includes(item)) {
            let newArr = data.filter((it, idx) => it !== item);
            setData(newArr);
        } else {
            setData((p) => [...p, item]);
        }
    };

    return (
        <Modal
            size={size}
            className="modal-dialog-centered modal-primary"
            contentClassName={contentClassName}
            isOpen={isOpen}
            toggle={toggle}
            // style={{ backgroundColor: primaryColor }}
        >
            <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                    {header}
                </h6>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggle}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div
                className="modal-body"
                style={{ backgroundColor: primaryColor }}
            >
                {customNotify && (
                    <div className="py-3 text-center">
                        <i className="ni ni-check-bold ni-3x" color={color} />
                        <h4 className="heading mt-4">{title}</h4>
                    </div>
                )}
                {props.children}
            </div>
            {/* {JSON.stringify(data)} */}
            {customNotify && (
                <div className="row">
                    <Col className="ml-1">Notify Customer: </Col>
                    {notify.map((item, i) => (
                        <Col>
                            <Label check className="ml-3" key={i}>
                                <Input
                                    checked={data.includes(item)}
                                    name={item}
                                    type="checkbox"
                                    onChange={() => handleCheck(item)}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        marginRight: 3
                                    }}
                                />
                                {item}
                            </Label>
                        </Col>
                    ))}
                </div>
            )}

            <div className="modal-footer">
                <Button
                    className="text-white"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={handleSave}
                >
                    {save}
                </Button>
                <Button
                    className="btn-white ml-auto"
                    color="default"
                    type="button"
                    onClick={handleSubmit}
                >
                    {submitText}
                </Button>
            </div>
        </Modal>
    );
}

export default CustomModal;
