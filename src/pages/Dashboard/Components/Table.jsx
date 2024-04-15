import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../../components/MOCK_DATA.json";
import { COLUMNS } from "../../../components/Columns";

const Table = () => {
    const data = useMemo(() => MOCK_DATA, []);
    const columns = useMemo(() => COLUMNS, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                    return (
                        <tr key={key} {...restHeaderGroupProps}>
                            {headerGroup.headers.map((column) => {
                                const { key, ...restColumn } = column.getHeaderProps();
                                return (
                                    <th key={key} {...restColumn}>
                                        {column.render("Header")}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    const { key, ...restRowProps } = row.getRowProps();
                    return (
                        <tr key={key} {...restRowProps}>
                            {row.cells.map((cell) => {
                                const { key, ...restRow } = cell.getCellProps();
                                return (
                                    <td key={key} {...restRow}>
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default Table;
