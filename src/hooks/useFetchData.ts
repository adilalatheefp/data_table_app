import { useEffect, useState } from "react";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      setIsLoading(false);

      if (response.ok === false) {
        throw response;
      }

      if (response.status === 204) {
        setData(undefined);
        return;
      } else {
        const jsonData = (await response.json()) as T;
        setData(jsonData);
        return;
      }
    } catch (ex) {
      console.log("Fetch Failed", ex);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { data, isLoading, isError };
};
