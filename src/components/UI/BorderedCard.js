import classNames from "classnames";
import React from "react";
import { Card } from "reactstrap";
import { themeClass } from "variables";
import useWindowDimensions from "windowSize";

function BorderedCard(props) {
    const { height } = useWindowDimensions();
    return (
        <Card
            className={classNames([themeClass, props.className])}
            color="secondary"
            outline
            style={{ height: height + "70%" }}
        >
            {props.children}
        </Card>
    );
}

export default BorderedCard;
