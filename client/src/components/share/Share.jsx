import React from 'react';
import {Container, Wrapper, Bottom, Img} from "./shareStyle";

const Share = () => {
    return (
        <Container>
            <Wrapper>
                <Bottom>
                    <Img src={"/img/person2.jpg"}/>
                </Bottom>

            </Wrapper>
        </Container>
    );
};

export default Share;