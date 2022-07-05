import Button from "../Generic/Button";
import CheckBox from "../Generic/CheckBox";
import Input from "../Generic/Input";
import { Container, RememberWrapper, Title } from "./style";

const SignIn = () => {
    return (
        <Container className="nocopy">
            <Title>Sign in</Title>
            <Input placeholder={'Login'} mt={40} py={4}/>
            <Input placeholder={'Password'} type={'password'} mt={40} mb={16} py={4}/>
            <RememberWrapper>
                <RememberWrapper.Box>
                    <CheckBox id="checkbox" mr={10}/>
                    <label htmlFor="checkbox">
                        Remember me
                    </label>
                </RememberWrapper.Box>
                <p className="forgot">Forgot</p>
            </RememberWrapper>
            <Button type={'primary'} mb={24}>Login</Button>
        </Container>
    )
}

export default SignIn;
