import React, {useState} from 'react';
import {useQuery, useMutation } from 'react-query';
import {useNavigate} from 'react-router-dom';
import { CardsWrapper, Container} from './style';
import Card from '../Generic/Card';
import Footer from '../Footer';
import Filter from '../Filter';
import Button from '../Generic/Button';

// const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {isLoading} = useQuery('list', () => { return fetch('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res) => res.json())}, 
    {
      onSuccess: (res) => {
        setData(res?.data);
      }
    },
  );
  // console.log(data);
  
  return (
        <>
          <Filter/>
          <Container>
            <h2 className='section-title'>Properties</h2>
            <p className='section-dscr to-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <div>length: {isLoading ? 0 : data?.length}</div>  
              <CardsWrapper>    
                {isLoading ? <h1>No Data</h1> : data?.map((item) => 
                  <Card key={item.id} item={item} onClick={() => navigate(`/properties/:${item.id}`)}/>
                )}
            </CardsWrapper>
            <Button type={'primary'} width="250" mAuto={'auto'}>Show more</Button>
          </Container>
          <Footer/>
        </>
    )
}

export default Properties;