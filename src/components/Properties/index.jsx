import React from 'react';
import {useQuery} from 'react-query';
import {useNavigate} from 'react-router-dom';
import { CardsWrapper, Container} from './style';
import Card from '../Generic/Card';
import Footer from '../Footer';

// const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const navigate = useNavigate();

  const {data, isLoading} = useQuery('list', () => { return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list`).then((res) => res.json())});
  // console.log(data);
  return (
        <>
          <Container>
          <h2 className='section-title'>Properties</h2>
          <p className='section-dscr to-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          <div>length: {isLoading ? 0 : data?.data.length}</div>  
            <CardsWrapper>    
              {data?.data.map((item) => 
                <Card key={item.id} url={item.attachments[0].imgPath} title={item.name} dscr={item.description} onClick={() => navigate(`/properties/:${item.id}`)}/>
              )}
          </CardsWrapper>
        </Container>
        <Footer/>
        </>
    )
}

export default Properties;