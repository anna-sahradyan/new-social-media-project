import React from 'react';
import {Container, Wrapper, Title, Input, Link,Form,Button,Text, TitleSocial} from "./loginStyled";

const Login = () => {
    return (
        <>
            <Container>
                <TitleSocial>Annasocial</TitleSocial>
                <Text>Connect with friends and the world around you on Annasocial.</Text>
                <Wrapper>
                    <Title>SIGN IN </Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'}/>
                        <Input placeholder={'password'}/>
                        <Button>LOGIN</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    );
};

export default Login;