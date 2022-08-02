import { CardWrapper, Title } from "./style";
import cardImg from '../../../../assets/images/category-img1.png'
// import house from '../../../../assets/icons/house.svg';

const Card = ({title, onClick}) => {
    return (
        <CardWrapper onClick={onClick}>
            <img src={cardImg} alt="card-img" />
            <Title>{title}</Title>
        </CardWrapper>
    )
}

export default Card;