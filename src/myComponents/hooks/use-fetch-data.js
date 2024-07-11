//source: https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h

// use-fetch-data.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // CHQ: Is useEffect really the best way to do this?
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/stuff/to/fetch");
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
