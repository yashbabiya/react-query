import React, { useEffect, useState } from "react";

export default function HomeByEffect() {
  const [state, setstate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    let data = await fetch("https://swapi.dev/api/people/");
    setstate(await data.json());
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>HomeByEffect</h1>
      <br />
      Loading : {isLoading?"Yes":"No"}
      {state &&
        state.results &&
        state.results.map((res) => (
          <div className="h3">
            <h3>{res.name}</h3>
            <p>{res.gender}</p>
          </div>
        ))}
    </div>
  );
}
