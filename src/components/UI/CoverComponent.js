import ToggleSwitch from "hooks/ToggleSwitch";
import moment from "moment";
import React from "react";
import { Col, Input, Label, Row } from "reactstrap";

export default function CoverComponent({
    form = {},
    setForm,
    handleChange = (f) => f,
    handleRadio = (f) => f,
    val = {}
}) {
    return (
        <div>
            <Row className="m-0">
                <Col md={4}>
                    <Label className="font-weight-bold text-primary">
                        Cover From
                    </Label>
                    <Input
                        type="date"
                        name="cover_from"
                        className="border border-primary rounded"
                        value={form.cover_from}
                        onChange={({ target: { value } }) => {
                            const lastDay = moment(value)
                                .add(1, "year")
                                .subtract(1, "day")
                                .format("YYYY-MM-DD");
                            setForm((prev) => ({
                                ...prev,
                                cover_from: value,
                                cover_to: lastDay
                            }));
                        }}
                    />
                </Col>
                <Col md={2}>
                    <Label className="font-weight-bold text-primary">
                        Period in
                    </Label>
                    <ToggleSwitch
                        values={["Years", "Months", "Days"]}
                        selected={
                            val.period === "Months"
                                ? "Months"
                                : val.period === "Years"
                                ? "Years"
                                : "Days"
                        }
                        handleToggleSwitchChanges={handleRadio}
                    />
                </Col>
                <Col md={2} className="ml-1">
                    <Label></Label>
                    <Input
                        className="border border-primary rounded"
                        name="cover_to"
                        type="number"
                        value={form.period}
                        onChange={({ target: { value } }) => {
                            const lastDay = moment(form.cover_from)
                                .add(value, "months")
                                .subtract(1, "day")
                                .format("YYYY-MM-DD");
                            const daysVal = moment(form.cover_from)
                                .add(value, "days")
                                .format("YYYY-MM-DD");
                            const yearsVal = moment(form.cover_from)
                                .add(value, "year")
                                .subtract(1, "day")
                                .format("YYYY-MM-DD");
                            setForm((prev) => ({
                                ...prev,
                                period: value,
                                cover_to:
                                    val.period === "Days"
                                        ? daysVal
                                        : val.period === "Years"
                                        ? yearsVal
                                        : lastDay
                            }));
                        }}
                    />
                </Col>

                <Col md={3}>
                    <Label className="font-weight-bold text-primary">
                        Cover To
                    </Label>
                    <Input
                        className="border border-primary rounded"
                        type="date"
                        name="cover_to"
                        value={form.cover_to}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
        </div>
    );
}
