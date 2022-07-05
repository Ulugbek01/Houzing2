import React from "react";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import { Popover } from "antd";
import { Address, ApartmentInfo, Container, FilterIcon, PopoverWrapper, Price, Search } from "./style";


const Filter = () => {

    const content = (
    <PopoverWrapper>
        <PopoverWrapper.Address>
            <h3 className="filter-title">Address</h3>
            <Address>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'Country'}/>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'Region'}/>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'City'}/>
                <Input width={200} pl={16} type={'primary'} placeholder={'Zip code'}/>
            </Address>
        </PopoverWrapper.Address>

        <PopoverWrapper.ApartmentInfo>
            <h3 className="filter-title">Apartment info</h3>
            <ApartmentInfo>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'Rooms'}/>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'Size'}/>
                <Input width={200} pl={16} type={'primary'} placeholder={'Sort'}/>
            </ApartmentInfo>
        </PopoverWrapper.ApartmentInfo>

        <PopoverWrapper.Price>
             <h3 className="filter-title">Price</h3>
            <Price>
                <Input width={200} mr={20} pl={16} type={'primary'} placeholder={'Min price'}/>
                <Input width={200} pl={16} type={'primary'} placeholder={'Max price'}/>
            </Price>
        </PopoverWrapper.Price>

        <PopoverWrapper.Footer>
            <Button width={128} mr={20}>Cencel</Button>
            <Button width={128} type={'primary'}>Submit</Button>
        </PopoverWrapper.Footer>
    </PopoverWrapper>
);

    return (
        <Container>
            <Input type={'primary'} pl={44} isIcon={true} placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
            <Popover placement="bottomRight" content={content} trigger="click"> 
                <Button type={'light'} width={130} ml={20} mr={20}><FilterIcon/> Advanced</Button>
            </Popover>
            <Button type={'primary'} width={180}><Search/> Search</Button>
        </Container>
    )
}

export default Filter;