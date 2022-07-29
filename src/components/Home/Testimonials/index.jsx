import React,{useRef} from "react";
import AliceCarousel from 'react-alice-carousel';
import { Container, CarouselWrapper, IconWrapper } from "./style";
import Card from "./Card";
import { ReactComponent as Prev } from "../../../assets/icons/prev.svg";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";

const items = [
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
]

const responsive = {
    0: { items: 1 },
	768: { items: 2 },
	1024: { items: 3 },
}

const Testimonials = () => {
    const ref = useRef();

    return (
        <Container>
            <h2 className="section-title">Testimonials</h2>
            <p className="section-disc to-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            
            <CarouselWrapper>
                <AliceCarousel 
                    items={items}
                    mouseTracking
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    controlsStrategy="alternate"
                    ref={ref}
                    />
            </CarouselWrapper>
            <IconWrapper position='left' onClick={() => ref.current.slidePrev()}><Prev/></IconWrapper>
            <IconWrapper onClick={() => ref.current.slideNext()}><Next/></IconWrapper>
        </Container>
    )
}
export default Testimonials;