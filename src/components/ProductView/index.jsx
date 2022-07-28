import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AsideCard, Container, Hero, IconWrapper } from './style';
import Input from '../Generic/Input';
import Button from '../Generic/Button';
import { ReactComponent as Bed } from "../../assets/icons/beds.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import user from '../../assets/images/avatar1.png';
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'

const ProductView = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    
    useQuery('list', ()=> {return fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then((res) => res.json())}, {
        onSuccess: (res)=> {
            setData(res?.data || []);
        }
    })
    console.log(data);
    
    return (
        <div>
            {data?.filter((item) => item.id == id.replace(':', '')).map((value) =>
                <Container key={value.id}>
                    <Hero>
                        <Hero.ImgWrapper>
                            <Hero.ImgWrapper.Left>
                                <img src={value.attachments[0].imgPath} alt="product img" />
                            </Hero.ImgWrapper.Left>
                            <Hero.ImgWrapper.Right>
                                <div>
                                    <img className='img' src={product2} alt="product img" />
                                    <img className='img' src={product3} alt="product img" />
                                </div>
                                <div>
                                    <img className='img' src={product4} alt="product img" />
                                    <img className='img' src={product5} alt="product img" />
                                </div>
                            </Hero.ImgWrapper.Right>
                        </Hero.ImgWrapper>

                        <Hero.Info>
                            <Hero.Info.Left>
                                <Hero.Info.Header>
                                    <div>
                                        <div>
                                            <Hero.Title className="title">Luxury Family Loft by Victoria Park</Hero.Title>
                                            <p className='text'>Quincy St, Brooklyn, NY, USA</p>
                                        </div>
                                        <Hero.Info.IconWrapper>
                                            <span><Bed/><span className='space'></span>{`${value.houseDetails.beds ? value.houseDetails.beds : 4} Beds`}</span>
                                            <span><Bath/><span className='space'></span>{`${value.houseDetails.bath ? value.houseDetails.bath : 6} Baths`}</span>
                                            <span><Car/><span className='space'></span>{`${value.houseDetails.garage ? value.houseDetails.garage : 3} Garage`}</span>
                                            <span><Ruler/><span className='space'></span>{`${value.houseDetails.area ? value.houseDetails.area : 11} Sq Ft`}</span>
                                            <span><Calendar/><span className='space'></span>{`Year Built: ${value.houseDetails.yearBuilt ? value.houseDetails.yearBuilt : 9}`}</span>
                                        </Hero.Info.IconWrapper>
                                    </div>
                                    <div>
                                        <Hero.Info.Header.Icons>
                                            <Hero.Info.Header.Icons.Share>
                                                <IconWrapper><Share/></IconWrapper><span className='left-space'></span> Share
                                            </Hero.Info.Header.Icons.Share>
                                            <Hero.Info.Header.Icons.Save>
                                                <IconWrapper><Heart/></IconWrapper><span className='left-space'></span> Save
                                            </Hero.Info.Header.Icons.Save>
                                        </Hero.Info.Header.Icons>

                                        <Hero.Info.Header.Price>
                                            <span className='line-through'>$2,800/mo</span>
                                            <span className='month-price'>$7,500/mo</span>
                                            <p className='text'>Est. Mortgage</p>
                                        </Hero.Info.Header.Price>
                                    </div>
                                    <AsideCard>
                                        <AsideCard.User>
                                            <img className='user-img' src={user} alt="user" />
                                            <div>
                                                <h4 className='user-name'>Darrel Steward</h4>
                                                <a className='tel' href="tel:(123)456-7890">(123)456-7890</a>
                                            </div>
                                        </AsideCard.User>
                                        <Input placeholder="Name"/>
                                        <Input type="tel" placeholder="Phone"/>
                                        <Input type="email" placeholder="Email"/>
                                        <Button type={'primary'} mt={20}>Send request</Button>
                                    </AsideCard>
                                </Hero.Info.Header>
                            </Hero.Info.Left>
                        </Hero.Info>
                    </Hero>
                </Container>
            )}
        </div>
    )
}
export default ProductView;