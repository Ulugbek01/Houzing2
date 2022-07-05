import { activeStyle, Container, Logo, LogoWrapper, NavbarWrapper } from "./style";
import { NavLink, useNavigate } from 'react-router-dom';
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
 
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <NavbarWrapper>
            <Container>
                <LogoWrapper>
                    <Logo onClick={() => navigate('/')}/>
                </LogoWrapper>
                <NavbarWrapper.NavItems>
                    {navbar.map(({id, title, path}) => 
                    <NavLink key={id} to={path} style={activeStyle}>{title}</NavLink>
                    )}
                </NavbarWrapper.NavItems>
                <Button onClick={() => navigate('signin')} width={120} type={'secondary'}>Login</Button>
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar;