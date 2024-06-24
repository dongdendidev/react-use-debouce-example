"use client";

type TableColumn<R extends Record<string, string | number>> = {
  key: Extract<keyof R, string>;
  title: string;
};

type TableProps<R extends Record<string, string | number>> = {
  columns: TableColumn<R>[];
  rows: R[];
};
const TableComponent = <R extends Record<string, string | number>>({
  columns,
  rows,
}: TableProps<R>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <td key={col.key}>{col.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
