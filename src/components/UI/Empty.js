import React from "react";
import { Alert } from "reactstrap";

function Empty({ text = "List is empty." }) {
    return (
        <Alert
            className="text-center text-dark font-weight-bold mx-1"
            style={{ backgroundColor: "#F3F6DE" }}
        >
            {text}
        </Alert>
    );
}

export default Empty;
