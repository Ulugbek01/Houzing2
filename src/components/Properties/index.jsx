import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {useLocation, useNavigate} from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import Card from '../Generic/Card';
import Footer from '../Footer';
import Filter from '../Filter';
import Button from '../Generic/Button';
import { CardsWrapper, Container} from './style';


const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;

  const [title, setTitle] = useState('Properties')
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = useSearch();

  const {isLoading} = useQuery(['list', search], () => { return fetch(`${url}/v1/houses/list${search}`).then((res) => res.json())},
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      }
    },
  );

  useQuery(['categories'], 
    () => {return query.get('category_id') && fetch(`${url}/v1/categories/${query.get('category_id')}`, 
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }).then((res) => res.json())},
      {
        onSuccess: (res) => {
          query.get('category_id') && setTitle(res?.data?.name)
        }
      }
    )


  return (
        <>
          <Filter/>
          <Container>
            <h2 className='section-title'>{isLoading ? <h2>Loading...</h2> : title.charAt(0).toUpperCase().concat(title.slice(1))}</h2>
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
