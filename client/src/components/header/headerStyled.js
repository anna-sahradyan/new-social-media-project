import styled from "styled-components";

export const Container = styled.div`
  height: 60px;

`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: #1877f2;

`;

export const Right = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
export const Left = styled.div`
  display: flex;
  flex: 3;
`;
export const Center = styled.div`
  display: flex;
  flex: 5;

`;
export const Logo = styled.h1`
  color: white;
  margin-left: 15px;
`;
export const SearchContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: 0;
  width: 450px;
  padding: 10px;
  border-radius: 15px;

  &::placeholder {
    color: #1877f2;
    position: absolute;
    left: 50px;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }

`;
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  margin: 5px;
`;
export const LinkItem = styled.div`
  display: flex;
  flex: 1;
  margin-left: -90px;
`;
export const Icons = styled.div`
  display: flex;
  position: relative;

`;
export const PersonIcon = styled.div`
  position: absolute;
  display: flex;
  margin-left: -290px;
  flex: 1;

`;


export const IconNotification = styled.div`
  margin-left: -250px;
  position: absolute;
  display: flex;
  flex: 1;

`;
export const IconChat = styled.div`
  display: flex;
  flex: 1;
  margin-left: -200px;
  position: absolute;
`;
export const Span = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

`;
export const Img = styled.img`
  display: flex;
  flex: 1;
  margin-left: 300px;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
