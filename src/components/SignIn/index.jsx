import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../Generic/Button";
import CheckBox from "../Generic/CheckBox";
import Input from "../Generic/Input";
import { Container, RememberWrapper, Title } from "./style";

const SignIn = () => {
    const [password, setPassword] = useState();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        }
    })

    console.log(formik.values);

    return (
        <Container className="nocopy">
            <Title>Sign in</Title>
            <Input onChange={formik.handleChange} placeholder={'Login'} value={formik.values.login} mt={40} py={4}/>
            <Input onChange={(e) => setPassword(e.target.value)} value={formik.values.password} placeholder={'Password'} type={'password'} mt={40} mb={16} py={4}/>
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
