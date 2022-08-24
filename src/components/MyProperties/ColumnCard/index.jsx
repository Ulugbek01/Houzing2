import React from "react";
import { useMutation } from "react-query";
import {ReactComponent as Edit} from '../../../assets/icons/edit.svg'
import {ReactComponent as Delete} from '../../../assets/icons/delete.svg'
import home from '../../../assets/images/product4.png'
import {Button, Container, IconWrapper, Wrapper } from "./style";

const ColumnCard = ({item}) => {
    const {REACT_APP_BASE_URL: url} = process.env;
    

    const {mutate} = useMutation(() => {
        return fetch(`${url}/v1/houses/776`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                    address: "string",
                    attachments: [
                      {
                        imgPath: "https://www.shutterstock.com/search/house"
                      }
                    ],
                    categoryId: 0,
                    city: "string",
                    componentsDto: {
                      additional: "string",
                      airCondition: true,
                      courtyard: true,
                      furniture: true,
                      gasStove: true,
                      internet: true,
                      tv: true
                    },
                    country: "string",
                    description: "string",
                    homeAmenitiesDto: {
                      additional: "string",
                      busStop: true,
                      garden: true,
                      market: true,
                      park: true,
                      parking: true,
                      school: true,
                      stadium: true,
                      subway: true,
                      superMarket: true
                    },
                    houseDetails: {
                      area: 0,
                      bath: 0,
                      beds: 0,
                      garage: 0,
                      room: 0,
                      yearBuilt: 0
                    },
                    locations: {
                      latitude: 0,
                      longitude: 0
                    },
                    name: "string",
                    price: 0,
                    region: "string",
                    salePrice: 0,
                    status: true,
                    zipCode: "string"
            })

        }).then((res) => res.json());        
    })

    const onDelete = (id) => {
       mutate({}, {
        onSuccess: (res) => {
            console.log(res);
        }
       })
    }

    return (
        <Container>
            <ul className="d-flex title-wrapper">
                <li>Listing Title</li>
                <li>Date Published</li>
                <li>Status</li>
                <li>View</li>
                <li>Action</li>
            </ul>
            <Wrapper>
                <div className="listing-title">
                    <div className="listing-title__img">
                        <img src={item?.attachments[0]?.imgPath !== 'string' || home} alt="card-img" />
                        <Button bgType={'primary'} position="true" className={'to-uppercase'}>Featured</Button>
                    </div>

                    <div className="title-flex">
                        <div className="d-flex">
                            <div>
                                <h3 className="city-name">{item?.address}</h3>
                                <p className="city-desc">{item?.city}</p>
                            </div>
                            <div>
                                <Button className="to-uppercase" ml={'24'}>For Sale</Button>
                            </div>
                        </div>
                        <div className="price">
                            <p className="discount">$2,800/mo</p>
                            <p className="active-price"><b>${item?.price}/mo</b></p>
                        </div>
                    </div>
                </div>

                <div className="date-published">
                    <p>30 December 2022</p>
                </div>

                <div className="status">
                    <p>Pending</p>
                </div>

                <div className="view">
                    <p>5933</p>
                </div>

                <div className="action d-flex">
                    <IconWrapper><Edit/></IconWrapper>
                    <IconWrapper onClick={() => onDelete(item.id)}><Delete/></IconWrapper>
                </div>
            </Wrapper>
        </Container>
    )
}

export default ColumnCard;