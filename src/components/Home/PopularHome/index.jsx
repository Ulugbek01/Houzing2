import React from "react";
import { useNavigate } from "react-router-dom";
import { Section, Title } from "./style";
import Button from "../../Generic/Button";

const PopularHome = () => {
    const navigate = useNavigate();

    return (
        <Section>
            <Title className='section-title'> 
                Vermont Farmhouse With Antique Jail Is
                the Week's Most Popular Home
            </Title>
            <Button onClick={()=> navigate('/properties')} type={'primary'} width={180}>Read More</Button>
        </Section>
    )
}

export default PopularHome;