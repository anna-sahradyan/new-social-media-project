import React from 'react';
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import Feed from "../../components/feed/Feed";
import {Container} from "./homeStyle";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <SideBar/>
                <Feed/>
                <RightBar/>
            </Container>

        </>
    );
};

export default Home;