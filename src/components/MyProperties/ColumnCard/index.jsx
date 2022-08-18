import React from "react";
import {ReactComponent as Edit} from '../../../assets/icons/edit.svg'
import {ReactComponent as Delete} from '../../../assets/icons/delete.svg'
import home from '../../../assets/images/product4.png'
import {Button, Container, IconWrapper, Wrapper } from "./style";

const ColumnCard = ({item}) => {
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
                    <IconWrapper><Delete/></IconWrapper>
                </div>
            </Wrapper>
        </Container>
    )
}

export default ColumnCard;