import React from 'react';
import {
    Bottom,
    Center,
    Container,
    Img,
    ImgHeart,
    ImgLike,
    ImgPost,
    Left,
    Right,
    Span,
    SpanComment,
    Top,
    Wrapper
} from "./postStyle";
import { MoreVert } from "@material-ui/icons";
const Post = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <Left>
                            <Img src={"/img/person4.jpg"} alt={"person"}/>
                            <Span>Anna Paruryan</Span>
                            <Span>5 minutes ago</Span>
                        </Left>
                        <Right>
                            <MoreVert/>
                        </Right>
                    </Top>
                    <Center>
                        <Span>My post</Span>
                        <ImgPost src={"/img/post1.jpg"}/>
                    </Center>
                    <Bottom>
                        <Left>
                            <ImgHeart src={"/img/heart.png"}/>
                            <ImgLike src={"/img/like.png"}/>
                            <Span>10 people liked it</Span>
                        </Left>
                        <Right>
                            <SpanComment>10 comments </SpanComment>
                        </Right>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;