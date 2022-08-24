import React, { useState} from "react";
import { useQuery } from "react-query";
import ColumnCard from "./ColumnCard";
import { CardsWrapper, Container } from "./style";

const MyProperties = () => {
    const [data, setData] = useState([]);
    const { REACT_APP_BASE_URL: url } = process.env;

    useQuery('test', () => {
        return fetch(`${url}/v1/houses/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json());
    },
    {
        onSuccess: (res) => {
            setData(res?.data);
        }
    }
    )

    console.log(data);

    return (
        <Container>
            <h2 className="section-title to-left">MyProperties</h2>
            <CardsWrapper>
                {data?.map((item) => 
                    <ColumnCard item={item} key={item?.id}/>
                )}
            </CardsWrapper>
        </Container>
    )
}

export default MyProperties;

