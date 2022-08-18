import { activeStyle, Container, Logo, LogoWrapper, NavbarWrapper } from "./style";
import { NavLink, useNavigate } from 'react-router-dom';
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
 
const Navbar = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('signin');
    }

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/home');
        window.location.reload();
    }

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
                {localStorage.getItem('token') ? 
                    <div style={{display: 'flex'}}>
                        <Button onClick={() => navigate('/profile/properties')} width={120} type={'secondary'} className="login" mr={10}>Profile</Button>
                        <Button onClick={logOut} width={120} type={'secondary'} className="login">Log Out</Button>
                    </div>
                :
                    <Button onClick={ goToLogin } width={120} type={'secondary'} className="login">Login</Button>
                }
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar;