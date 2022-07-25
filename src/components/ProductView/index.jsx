import React from "react";
import {useParams} from "react-router-dom";
import { useQuery } from "react-query";

const ProductView = () => {
    const {id} = useParams();
    const {data} = useQuery('', () => {return fetch('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res) => res.json())})
    console.log(data);
    
    return (
        <div>
            {data?.data.filter((item) => item.id == id.replace(':', '')).map((value) =>
                <div key={value.id}>{value.id}{value.address}</div>
            )}
        </div>
    )
}

export default ProductView;