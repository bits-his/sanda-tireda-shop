import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useHistory, useLocation } from "react-router";
import { routeHelper } from "views/app/routes/helpers";

function BackButton({
    text = "Click to go back",
    size = "sm",
    className = ""
}) {
    const history = useHistory();

    return (
        <button
            className={`btn btn-primary m-1 btn-${size} ${className}`}
            onClick={() => history.goBack()}
        >
            <span className="d-flex flex-direction-row align-items-center">
                <AiOutlineLeft className="mr-1" size={20} />
                {text}
            </span>
        </button>
    );
}

export const BackToPolicy = ({
    text = "Click to go back",
    size = "sm",
    className = ""
}) => {
    const history = useHistory();
    const location = useLocation();
    return (
        <button
            className={`btn btn-primary m-1 btn-${size} ${className}`}
            onClick={() =>
                history.push(routeHelper(location, "/proposals/policy-renewal"))
            }
        >
            <span className="d-flex flex-direction-row align-items-center">
                <AiOutlineLeft className="mr-1" size={20} />
                {text}
            </span>
        </button>
    );
};

export default BackButton;
