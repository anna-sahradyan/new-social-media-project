import React from 'react';
import "./rightStyle"
import {
    Container,
    Day,
    H,
    Img,
    ImgBirthday,
    ImgLi,
    ImgList,
    Li,
    List,
    RightWrapper,
    Span,
    SpanOnline, SpanUser,
    Wrapper
} from "./rightStyle";

const RightBar = () => {
    return (
        <Container>
            <RightWrapper>
                <Day>
                    <Img src={"/img/gift2.png"} alt={"gift"}/>
                    <Span>
                        <b>Anna Jane</b>and <b>3 other friends </b>have a birthday today.
                    </Span>
                </Day>
                <ImgBirthday src={"/img/birthday.jpg"} alt={"birthday"}/>
                <H>Online Friends</H>
                <List>
                    <Li>
                    <ImgList>
                        <ImgLi src={"/img/person5.jpg"} alt={"person"}></ImgLi>
                        <SpanOnline></SpanOnline>
                    </ImgList>
                    <SpanUser>John Doe</SpanUser>
                </Li>
                </List>
            </RightWrapper>
        </Container>
    );
};

export default RightBar;