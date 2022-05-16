
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';

export default function Home() {


  const [state, setstate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getData = async() =>{

    setIsLoading(true);
    let data = await fetch('https://swapi.dev/api/people/')
    
    setIsLoading(false);

    return await data.json();
  }

  const {data } = useQuery('fetch data',getData);
 
  useEffect(() => {
    
     setstate(data)
  
    }, [data]);




 

  
 


  return (
    <div>
      <h1>Home
        </h1>

      <br />
      Loading : {isLoading ? "Yes" : "No"}
      {
        state && state.results && state.results.map((res)=>
        <div className='h3'>
        
        <h3>{res.name}</h3>
        <p>{res.gender}</p>
        
        </div>
        )
      }
    </div>
  )
}
