import React from "react";
import { Table } from "reactstrap";
import { checkStrEmpty } from "utils/index";
import { themeClass } from "variables";
import Empty from "./Empty";

function CustomTable(props) {
    const { fields = [], data = [], className = "", styles = {}, emptyText, extraRow=null } = props;
    return (
        <>
            <Table className={`${themeClass} ${className}`} size='sm' {...props} bordered>
                <thead>
                    <tr>
                        {fields.map((_item, _idx) => (
                            <th key={_idx} className={_item.left?'text-left':'text-center'}>
                                {_item.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => (
                        <tr key={idx} style={typeof styles === 'function' ? styles(item) : styles}>
                            {fields.map((_item, _idx) => {
                                let val = item[_item.value] || "";
                                let value_alt =
                                    (_item.value_alt &&
                                        item[_item.value_alt]) ||
                                    "";
                                if (_item.component) {
                                    return (
                                        <td
                                            key={_idx}
                                            className={_item.className}
                                        >
                                            {_item.component(item, idx)}
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td
                                            key={_idx}
                                            className={_item.className}
                                        >
                                            {checkStrEmpty(val)
                                                ? value_alt
                                                : val}
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                    ))}
                    {extraRow}
                </tbody>
            </Table>
            {data.length ? null : <Empty text={emptyText || 'List is empty.'} />}
        </>
    );
}

export default CustomTable;
