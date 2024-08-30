import DataTable from "../../components/DataTable";
import { useFetchData } from "../../hooks/useFetchData";
import { IDataTable } from "../../models/IDataTable";
import ErrorPage from "../ErrorPage";

const DataPage = (): JSX.Element => {
  //Custom hook to fetch data.
  const { data, isLoading, isError } = useFetchData<IDataTable[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //Returns Error Page if any error in the fetch. Else Displays the Grid.
  return isError ? (
    <ErrorPage />
  ) : (
    <DataTable records={data || []} isLoading={isLoading} />
  );
};

export default DataPage;
