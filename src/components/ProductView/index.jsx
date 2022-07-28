import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import { AsideCard, Container, Hero, IconWrapper, SectionWrapper } from './style';
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
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import Footer from '../Footer';

const key = 'AIzaSyAtToixyNzdDkQtU5fa0XFqfsBu3NrKXeA';

const ProductView = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: key,
        id: 'main'
    })

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
                                        <div>
                                            <h3 className='description'>Description</h3>
                                            <p>lorem</p>
                                        </div>
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
                    <SectionWrapper className='location-container'>
                        <h3 className='location-title'>Location</h3>
                        <div className='location-items'>
                            <div>
                                <p><b>Address:</b> {value?.address ? value.address : '329 Queensberry Street'}</p>
                                <p><b>State/County:</b> {value?.country ? value.country : 'Washington'}</p>
                            </div>
                            <div>
                                <p><b>City:</b> {value?.city ? value.city : 'Jersey City'}</p>
                                <p><b>Zip:</b> {value?.zipCode ? value.zipCode : '365448'}</p>
                            </div>
                            <div>
                                <p><b>Area:</b> {value?.region ? value.region : 'Tash City'}</p>
                                <p><b>Country:</b> {value?.region ? value.region : 'United States'}</p>
                            </div>
                        </div>

                        <GoogleMap
                            id='main'
                            mapContainerStyle={{
                                width: '100%',
                                height: '100vh',
                            }}
                            zoom={4}
                            center={{lat: 41.311081, lng: 69.240562}}
                            >
                            <Marker position={{ lat: 41.311081, lng:  69.240562 }} />
                            <Marker position={{ lat: 40.12341, lng:  67.82842 }} />
                            <Marker position={{ lat: 39.652451, lng:  66.970139 }} />
                            <Marker position={{ lat: 40.78206, lng: 72.34424 }} />
                            <Marker position={{ lat: 41.55175, lng: 60.63146 }} />
                            <Marker position={{ lat: 38.86056, lng: 65.78905 }} />
                            <Marker position={{ lat: 40.103922, lng: 65.368833 }} />
                            <Marker position={{ lat: 40.52861, lng: 70.9425 }} />
                            <Marker position={{ lat: 41.005773, lng: 71.643603 }} />
                            <Marker position={{ lat: 39.75, lng:  67.8333 }} />
                            <Marker position={{ lat: 42.1007, lng: 63.62852 }} />
                        </GoogleMap>
                        
                    </SectionWrapper>

                    <SectionWrapper className='details'>
                        <h3 className='details-title'>Property Details</h3>
                        <div className='details-wrapper'>
                            <div>
                                <p><b>Property ID:</b> {value.id}</p>
                                <p><b>Price:</b> {value.price ? value.price : '2000'}</p>
                                <p><b>Year Bulit:</b> {value.houseDetails.yearBuilt ? value.houseDetails.yearBuilt : '18'}</p>
                            </div>
                            <div>
                                <p><b>Bedrooms:</b> {value.houseDetails.beds ? value.houseDetails.beds: '6'}</p>
                                <p><b>Bathrooms:</b> {value.houseDetails.bath ? value.houseDetails.bath: '4'}</p>
                                <p><b>Garage:</b> {value.houseDetails.garage ? value.houseDetails.garage: '9'}</p>
                            </div>
                            <div>
                                <p><b>Property Type:</b> Apartment</p>
                                <p><b>Property Status:</b> For Sale</p>
                            </div>
                        </div>
                    </SectionWrapper>
                </Container>
            )}
            <Footer/>
        </div>
    )
}
export default ProductView;