import { Container } from "./style";
import noImg from '../../../../assets/images/not_img.jpg';

const ShowMore = ({item}) => {
    return (
        <Container>
            <div>
                <img src={item?.attachments[0].imgPath || noImg} alt="main-img" />
            </div>
        </Container>
    )
}

export default ShowMore;