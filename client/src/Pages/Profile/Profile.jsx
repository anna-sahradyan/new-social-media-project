import React from 'react';
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import {Bottom, Container, Cover, H, ImgProfile, ImgUser, Info, Right, Span, Top} from "./profileStyle";

const Profile = () => {
    return (
        <>
            <Header/>
            <Container>
                <SideBar/>
                <Right>
                    <Top>
                        <Cover>
                            <ImgProfile src={"/img/post1.jpg"} alt={"post"}/>
                            <ImgUser src={"/img/person3.jpg"} alt={"post"}/>

                        </Cover>
                        <Info>
                            <H>Anna Paruryan</H>
                            <Span>Hello my friends </Span>
                        </Info>
                    </Top>
                    <Bottom>
                        <Feed/>
                        <RightBar profile />
                    </Bottom>
                </Right>
            </Container>
        </>
    );
};

export default Profile;