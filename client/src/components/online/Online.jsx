import React from 'react';
import {ImgLi, ImgList, Li, SpanOnline, SpanUser} from "../rightbar/rightStyle";

const Online = ({user}) => {

    return (
        <>
            <Li>
                <ImgList>
                    <ImgLi src={user.profilePicture} alt={"person"}></ImgLi>
                    <SpanOnline></SpanOnline>
                </ImgList>
                <SpanUser>{user.username}</SpanUser>
            </Li>
        </>
    );
};

export default Online;