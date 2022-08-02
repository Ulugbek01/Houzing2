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
    onChange,
    placeholder,
    type,
    isIcon,
    className,
    name,
    value
}) => {
    return (
        <Wrapper isIcon={isIcon}>
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
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                isIcon={isIcon}
                className={className}id
                name={name}
                value={value}
            />
        </Wrapper>
    )
}

export default Input;