import React from 'react';
import "./headerStyled";
import {
    Container,
    Left,
    Center,
    Right,
    Wrapper,
    Logo,
    SearchContainer,
    Input,
    Link,
    LinkItem,
    Icons, PersonIcon, Span, IconChat, IconNotification, Img
} from "./headerStyled"
import {Chat, Notifications, Person, Search} from "@mui/icons-material";


const Header = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo className={"logo"}>AnnaSocial</Logo>
                    </Left>
                    <Center>
                        <SearchContainer>
                            <Search style={{
                                color: "gray",
                                fontSize: "20 px !important",
                                position: "absolute",
                                right: "5px",
                                top: "7px"
                            }}/>
                            <Input placeholder="Search for friend, post or video"
                                   className="searchInput"/>

                        </SearchContainer>
                    </Center>
                    <Right>
                        <LinkItem>
                            <Link>Homepage</Link>
                            <Link>Timeline</Link>
                        </LinkItem>
                        <Icons>
                        <PersonIcon>
                            <Person/>
                            <Span>1</Span>
                        </PersonIcon>
                        <IconChat>
                            <Chat/>
                            <Span>2</Span>
                        </IconChat>
                        <IconNotification>
                            <Notifications/>
                            <Span>1</Span>
                        </IconNotification>
                        </Icons>
                        <Img src={"/img/avatar.png"}>
                        </Img>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
};

export default Header;