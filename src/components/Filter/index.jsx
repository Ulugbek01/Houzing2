import Button from "../Generic/Button";
import Input from "../Generic/Input";
import { Container, FilterIcon, Search } from "./style";


const Filter = () => {
    return (
        <Container>
            <Input  type={'primary'} pl={44} isIcon={true} placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
            <Button type={'light'} width={130} ml={20} mr={20}><FilterIcon/> Advanced</Button>
            <Button type={'primary'} width={180}><Search/> Search</Button>
        </Container>
    )
}

export default Filter;