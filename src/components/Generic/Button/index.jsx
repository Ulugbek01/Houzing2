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
    className
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
                >
            {children}
        </Container>
    )
}

export default Button;