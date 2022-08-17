import React,{useState} from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import CheckBox from "../Generic/CheckBox";
import Input from "../Generic/Input";
import { Container, RememberWrapper, Title } from "./style";

const SignIn = () => {
    const {REACT_APP_BASE_URL: url} = process.env;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 
    const { mutate } = useMutation(()=> {
        return fetch(`${url}/public/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        }).then((res) => res.json());
    });

    const onSubmit = () => {
        if(email.length && password.length) {
            mutate({}, 
                {
                    onSuccess: (res) => {
                        if(res?.authenticationToken) {
                            localStorage.setItem('token', res?.authenticationToken);
                            navigate('/home');
                        }
                        else {
                            setError("Email yoki password xato")
                        }
                    }
                }
            )
        }
        else {
            setError("Email yoki password bo'sh bo'lmasligi kerak")
        }
    }

    return (
        <Container className="nocopy">
            <Title>Sign in</Title>
                <Input value={email} onChange={({target: {value}}) => {setEmail(value); setError(false)}} placeholder={'Email'} name='email' mt={40} py={4} type={'email'}/>
                <Input value={password} onChange={({target: {value}}) => {setPassword(value); setError(false)}} name='password' placeholder={'Password'} type={'password'} mt={40} mb={16} py={4}/>
                <p style={{color: 'red'}}>{error}</p>
                <RememberWrapper>
                    <RememberWrapper.Box>
                        <CheckBox id="checkbox" mr={10}/>
                        <label htmlFor="checkbox">
                            Remember me
                        </label>
                    </RememberWrapper.Box>
                    <p className="forgot">Forgot</p>
                </RememberWrapper>
                <Button onClick={onSubmit} type={'primary'} mb={24}>Login</Button>
        </Container>
    )
}

export default SignIn;
