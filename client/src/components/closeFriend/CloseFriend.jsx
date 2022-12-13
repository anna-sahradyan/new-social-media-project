import React from 'react';
import {Img, Li, Span} from "../sidebar/sidebarStyle";

const CloseFriend = ({user}) => {
    return (
        <>
            <Li>
                <Img src={user.profilePicture} alt={"person"}/>
                <Span>{user.username}</Span>
            </Li>
        </>
    );
};

export default CloseFriend;