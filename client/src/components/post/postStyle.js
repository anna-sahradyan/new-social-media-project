import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;
export const Wrapper = styled.div`
  padding: 10px;

`;
export const Span = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;


`;
export const SpanComment = styled.span`
  font-size: 15px;
  border-bottom: 1px dashed grey;
 cursor: pointer;


`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
export const ImgPost = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

`;
export const Left = styled.div`
  display: flex;
  align-items: center;

`;
export const Right = styled.div`


`;
export const Center = styled.div`
  margin: 20px 0;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const ImgHeart = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;

`;
export const ImgLike = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;