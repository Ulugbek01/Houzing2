import { Container } from "./style";

const Input = ({
    width,
    height,
    mt,
    mr,
    mb,
    ml,
    px,
    py,
    onClick,
    placeholder,
    type,
}) => {
    return (
        <Container 
            width={width}
            height={height}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            px={px}
            py={py}
            onClick={onClick}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default Input;