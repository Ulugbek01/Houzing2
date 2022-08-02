import React from "react";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hooks/useReplace";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import { Address, ApartmentInfo, Container, FilterIcon, PopoverWrapper, Price, Search } from "./style";


const Filter = () => {
    const navigate = useNavigate();

    const onChange = ({target}) => {
        const {value, name} = target;
        navigate(UseReplace(name, value))
    }

    const content = (
    <PopoverWrapper>
        <PopoverWrapper.Address>
            <h3 className="filter-title">Address</h3>
            <Address>
                <Input onChange={onChange} name='country' width={200} mr={20} pl={16} type={'primary'} placeholder={'Country'}/>
                <Input onChange={onChange} name='region' width={200} mr={20} pl={16} type={'primary'} placeholder={'Region'}/>
                <Input onChange={onChange} name='city' width={200} mr={20} pl={16} type={'primary'} placeholder={'City'}/>
                <Input onChange={onChange} name='zip_code' width={200} pl={16} type={'primary'} placeholder={'Zip code'}/>
            </Address>
        </PopoverWrapper.Address>

        <PopoverWrapper.ApartmentInfo>
            <h3 className="filter-title">Apartment info</h3>
            <ApartmentInfo>
                <Input onChange={onChange} name='room' width={200} mr={20} pl={16} type={'primary'} placeholder={'Rooms'}/>
                <Input onChange={onChange} name='size' width={200} mr={20} pl={16} type={'primary'} placeholder={'Size'}/>
                <Input onChange={onChange} name='sort' width={200} pl={16} type={'primary'} placeholder={'Sort'}/>
            </ApartmentInfo>
        </PopoverWrapper.ApartmentInfo>

        <PopoverWrapper.Price>
             <h3 className="filter-title">Price</h3>
            <Price>
                <Input onChange={onChange} name='min_price' width={200} mr={20} pl={16} type={'primary'} placeholder={'Min price'}/>
                <Input onChange={onChange} name='max_price' width={200} pl={16} type={'primary'} placeholder={'Max price'}/>
            </Price>
        </PopoverWrapper.Price>
        
        <PopoverWrapper.Footer>
            <Button width={128} mr={20}>Cancel</Button>
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