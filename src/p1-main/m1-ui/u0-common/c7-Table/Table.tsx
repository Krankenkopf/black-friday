import React, { MouseEvent, useMemo } from 'react';
import css from './Table.module.css'
import TableHeader from "./Components/TableHeader";
import TableRow from "./Components/TableRow";

type TTableProps = {
    cellData?: Array<[string, ...Array<React.ReactNode>]>
    cellIDs?: Array<string>
    headerTitles?: Array<string | React.ReactNode>
    columnSchema?: string
    columnWeights?: Array<string>
    cellMinHeight?: string
}
const Table = React.memo((props: TTableProps) => {
    const {
        cellData = [ // might be strings, html tags or jsx elements
            // first element is id, that will be assigned to row container and then will be delete from array
            ['1', 'NO DATA', 'NO DATA', 'NO DATA'],  // 1st row
            ['2', <button>BUTTON</button>, 'NO DATA'], // 2nd row with void 3rd element
            ['3', 'NO DATA', '', 'NO DATA'],], // 3rd row with void 2nd element
        headerTitles = ['COLUMN1', 'COLUMN2+COLUMN3',], // headers row
        columnSchema = 'h1 h2 h2', // CSS gridTemplateAreas for header titles
        columnWeights = ['3fr', '1fr', '1fr',], // CSS gridTemplateColumns property, will be added to each row
        cellMinHeight = '48px', // if content overflows, container will be expanded
    } = props
    console.log('call')
    const tableRows = useMemo(() => cellData.map((row: [string, ...Array<React.ReactNode>], i) => {
        const reduced = [...row]
        reduced.shift()
        return <div id={row[0]}>
            <TableRow key={i} cells={reduced} columnWeights={columnWeights} cellMinHeight={cellMinHeight}/>
        </div>
    }), [cellData, columnWeights, cellMinHeight])

    const handleExpand = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e)
    }

    return (
        <div className={css.table} {...props}>
            <TableHeader headerTitles={headerTitles}
                         columnWeights={columnWeights}
                         columnSchema={columnSchema}
                         cellMinHeight={cellMinHeight}/>
            <div style={{position: 'relative'}} onClick={(e) => handleExpand(e)}>
                {tableRows}
            </div>
        </div>
    )
})

export default Table