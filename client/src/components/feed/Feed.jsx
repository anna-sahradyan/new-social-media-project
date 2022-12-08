import React from 'react';
import "./feedStyle"
import {Container, Wrapper} from "./feedStyle";
import Share from "../share/Share";

const Feed = () => {
    return (
        <Container>
            <Wrapper>
                <Share/>
            </Wrapper>

        </Container>
    );
};

export default Feed;