import React from "react";
import { Container } from "./style";

const Button = ({
    width,
    height,
    type,
    mt,
    mr,
    mb,
    ml,
    onClick,
    children,
    className,
    mAuto
}) => {
    return (
            <Container 
                width={width}
                height={height}
                type={type}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                onClick={onClick}
                className={`${className} nocopy`}
                mAuto={mAuto}
                >
            {children}
        </Container>
    )
}

export default Button;