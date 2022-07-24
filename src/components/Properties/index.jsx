import React from 'react';
import {useQuery} from 'react-query';


const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;

  const {data} = useQuery('', () => { return fetch(`${url}/v1/houses/list`).then((res) => res.json())});
  console.log(data);
  return (
        <div>
           Proporties
        </div>
    )
}

export default Properties;