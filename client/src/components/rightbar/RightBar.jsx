import React from 'react';
import "./rightStyle"
import {Container, Day, Img, Span} from "./rightStyle";

const RightBar = () => {
    return (
        <Container>
            <Wrapper>
                <Day>
                    <Img/>
                    <Span></Span>
                </Day>
            </Wrapper>
        </Container>
    );
};

export default RightBar;