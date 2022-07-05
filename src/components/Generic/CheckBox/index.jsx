import { Container } from "./style";

const CheckBox = ({
    width,
    height,
    checkBoxType,
    mt,
    mr,
    mb,
    ml,
    px,
    py,
    onClick,
    id,
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
            type="checkbox"
            types={checkBoxType}
            id={id}
        />
    )
}

export default CheckBox;
