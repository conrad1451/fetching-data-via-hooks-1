//source: https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h

//mycomponent.js
import React from "react";
import useFetchData from "./hooks/use-fetch-data.js";

const MyComponent = () => {
  const { data, loading } = useFetchData();

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map((item) => (
            <span>{item.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
