import React from 'react';
import "./feedStyle"
import {Container, Wrapper} from "./feedStyle";
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../data";

const Feed = () => {
    return (
        <Container>
            <Wrapper>
                <Share/>
                {Posts.map((post,index)=>( <Post key={`${post}_${index}`} post={post}/>))}

            </Wrapper>

        </Container>
    );
};

export default Feed;