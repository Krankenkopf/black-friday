import React, {FC} from 'react';
import css from "../Table.module.css";

type TTableCeilProps = {
    cellMinHeight?: string
};
const TableCell: FC<TTableCeilProps> = ({cellMinHeight, children}) => {
    return (
        <div className={css.table__cell__container} style={{minHeight: cellMinHeight}}>
            <div className={css.table__cell}>{children}</div>
        </div>
    )
}

export default TableCell