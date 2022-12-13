import React from 'react';
import "./rightStyle"
import {
    Container,
    Day,
    H,
    Img,
    ImgBirthday,
    List,
    RightWrapper,
    Span,


} from "./rightStyle";
import {Users} from "../../data";
import Online from "../online/Online";

const RightBar = ({profile}) => {
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
                    {Users.map((item,index)=>  (<Online key={`${item}_${index}`} user={item}/>))}

                </List>
            </RightWrapper>
        </Container>
    );
};

export default RightBar;