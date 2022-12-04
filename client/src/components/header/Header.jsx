import React from 'react';
import "./headerStyled";
import {Container} from "./headerStyled"
const Header = () => {
    return (
        <>
            <Container>
                <TopBarLeft></TopBarLeft>
                <TopBarCenter></TopBarCenter>
                <TopBarRight></TopBarRight>

            </Container>
        </>
    );
};

export default Header;