import { IDataTable } from "../../models/IDataTable";

type IDataTableRow = {
  record: IDataTable;
};

const DataTableRow = ({ record }: IDataTableRow) => {
  return (
    <tr>
      <td>{record.id}</td>
      <td>{record.title}</td>
      <td>{record.body}</td>
    </tr>
  );
};

export default DataTableRow;
