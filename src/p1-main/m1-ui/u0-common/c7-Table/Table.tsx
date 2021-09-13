import React, {FC} from 'react';
import css from './Table.module.css'
import TableHeader from "./Components/TableHeader";
import TableRow from "./Components/TableRow";

type TTableProps = {
    cellData?: Array<Array<string | React.ReactNode>>
    headerTitles?: Array<string | React.ReactNode>
    columnSchema?: string
    columnWeights?: Array<string>
    tableMaxHeight?: string
    cellMinHeight?: string
}
const Table: FC<TTableProps> = (props) => {
    const {
        cellData = [ // might be strings, html tags or jsx elements
            ['NO DATA', 'NO DATA', 'NO DATA'],  // 1st row
            [<button>BUTTON</button>, 'NO DATA'], // 2nd row with void 3rd element
            ['NO DATA', '', 'NO DATA'],], // 3rd row with void 2nd element
        headerTitles = ['COLUMN1', 'COLUMN2+COLUMN3',], // headers row
        columnSchema = 'h1 h2 h2', // CSS gridTemplateAreas for header titles
        columnWeights = ['3fr', '1fr', '1fr',], // CSS gridTemplateColumns property, will be added to each row
        tableMaxHeight = '500px', // if content overflows container, scrollbar will be provided
        cellMinHeight = '48px', // if content overflows, container will be expanded
        } = props

    const tableRows = cellData.map((el: Array<string | React.ReactNode>, i) => (
        <TableRow key={i} cells={el} columnWeights={columnWeights} cellMinHeight={cellMinHeight}/>
    ))
    return (
        <div className={css.table} style={{maxHeight: tableMaxHeight}} {...props}>
            <TableHeader headerTitles={headerTitles}
                         columnWeights={columnWeights}
                         columnSchema={columnSchema}
                         cellMinHeight={cellMinHeight}/>
            {tableRows}
        </div>
    )
}

export default Table