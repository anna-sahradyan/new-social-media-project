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
    SpanComment, SpanPost,
    Top,
    Wrapper
} from "./postStyle";
import { MoreVert } from "@material-ui/icons";
const Post = ({post}) => {
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
                        <SpanPost>{post?.desc}</SpanPost>
                        <ImgPost src={post.photo}/>
                    </Center>
                    <Bottom>
                        <Left>
                            <ImgHeart src={"/img/heart.png"}/>
                            <ImgLike src={"/img/like.png"}/>
                            <Span>{post.like} people liked it</Span>
                        </Left>
                        <Right>
                            <SpanComment>{post.comments}comments </SpanComment>
                        </Right>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;