import React from 'react'
import useFetch from './UseFetch';
import './FetchData.css'

const FetchData = () => {
    // implementing custom hook with specific url
    const [data]=useFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>

        {/* retrieving data in Front End */}
        {data && data.map((e,index)=>(
        <li key={index} className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
        ))}

     </ul>
    </>
  )
}

export default FetchData
