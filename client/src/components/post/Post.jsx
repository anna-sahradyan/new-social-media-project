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
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../data";

const Post = ({post}) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <Left>
                            <Img src={Users.filter((u) => u.id ===post.userId)[0].profilePicture}/>
                            <Span>{Users.filter((u) => u.id === post.userId)[0].username}</Span>
                            <Span>{post.data}</Span>
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
                            <SpanComment>{post.comments}comments</SpanComment>
                        </Right>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Post;