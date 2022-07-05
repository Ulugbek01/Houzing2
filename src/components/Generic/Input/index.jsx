import { Container, Houses, Wrapper } from "./style";

const Input = ({
    width,
    height,
    mt,
    mr,
    mb,
    ml,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    onClick,
    placeholder,
    type,
    isIcon
}) => {
    return (
        <Wrapper>
            {isIcon  ? <Houses/> : ''}
            <Container 
                width={width}
                height={height}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                pt={pt}
                pr={pr}
                pb={pb}
                pl={pl}
                px={px}
                py={py}
                onClick={onClick}
                placeholder={placeholder}
                type={type}
                isIcon={isIcon}
            />
        </Wrapper>
    )
}

export default Input;