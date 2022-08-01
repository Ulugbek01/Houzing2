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
        },

        onSubmit: (value) => {
            console.log(value);
        },

        validate:(res) => {
            const error = {};
            if(res.login.length > 10) {
                error.login = 'Belgilangan uzunlikdan oshib ketdi'
            }
            if(res.password.length > 12) {
                error.password = 'Bu yerga 12 tadan ortiq belgi kirita olmaysiz'
            }
            return error;
        }
    })

    // console.log(formik.values);

    return (
        <Container className="nocopy">
            <Title>Sign in</Title>
            <form action="" method="post" onSubmit={formik.handleSubmit}>
                <Input onChange={formik.handleChange} placeholder={'Login'} value={formik.values.login} name='login' mt={40} py={4}/>
                <p style={{color: 'red'}}>{formik.errors.login}</p>
                <Input onChange={formik.handleChange} value={formik.values.password} name='password' placeholder={'Password'} type={'password'} mt={40} mb={16} py={4}/>
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
            </form>
        </Container>
    )
}

export default SignIn;
