import React from 'react';
import "./feedStyle"
import {Container, Wrapper} from "./feedStyle";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
    return (
        <Container>
            <Wrapper>
                <Share/>
                <Post/>
            </Wrapper>

        </Container>
    );
};

export default Feed;