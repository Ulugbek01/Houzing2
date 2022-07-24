import React from "react";
import { Section, Title } from "./style";
import Button from "../../Generic/Button";

const PopularHome = () => {
    return (
        <Section>
            <Title className='section-title'> 
                Vermont Farmhouse With Antique Jail Is
                the Week's Most Popular Home
            </Title>
            <Button type={'primary'} width={180}>Read More</Button>
        </Section>
    )
}

export default PopularHome;