import { IDataTable } from "../../models/IDataTable";
import DataTableRow from "../DataTableRow";

type IDataTableRow = {
  records: IDataTable[];
  isLoading: boolean;
};

const DataTable = ({ records, isLoading }: IDataTableRow): JSX.Element => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        {isLoading && (
          //Shows spinner while fetching the data.
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )}

        <tbody>
          {records === undefined ? (
            //If No Content from API, displays a message.
            <tr>
              <td colSpan={3}>No records available at the moment</td>
            </tr>
          ) : (
            //If we get a response from API, displays the table rows.
            records.map((record) => {
              return <DataTableRow record={record} />;
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
