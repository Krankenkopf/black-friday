import React, {CSSProperties, FC} from 'react';
import css from "../Table.module.css";
import TableCell from "./TableCell";

type TTableRowProps = {
    cells: Array<React.ReactNode>
    columnWeights: Array<string>
    cellMinHeight?: string
};
const TableRow: FC<TTableRowProps> = (props) => {
    const {
        cells,
        columnWeights,
        cellMinHeight,
        ...restProps} = props
    const getColumnsTemplate = (weights: string[]) => {
        return weights.reduce((acc, w) => acc + `minmax(0, ${w}) `, '').trim()
        //  exm. 'minmax(0, 8fr) minmax(0, 100px) ... minmax(0, 1fr)'
    }
    const rowStyle = (): CSSProperties => {
        return {gridTemplateColumns: getColumnsTemplate(columnWeights)}
    }
    const mappedCells = cells.map((c, i) => (
        <TableCell key={i} cellMinHeight={cellMinHeight} children={c}/>
    ))
    return (
        <div className={css.table__row} style={rowStyle()}>
            {mappedCells}
        </div>
    )
}

export default TableRow