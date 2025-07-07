import React from "react";
import styled from "@emotion/styled";
import Post from "../assets/Frame.svg";

const PostList = () => {
  return (
    <Body>
      <TotalContainer>
        <ListBox>
          <span>게시물 목록</span>
          <ListContainer>
            <ListButton>
              <FirstList>
                <img src={Post} alt="" />
                <First>최신순</First>
              </FirstList>
              <List>게시글 작성하기</List>
            </ListButton>
            <ListCard>
              <Title>
                <InputTitle>제목이 들어가요</InputTitle>
                <span>22/08/16</span>
              </Title>
            </ListCard>
          </ListContainer>
        </ListBox>
      </TotalContainer>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TotalContainer = styled.div`
  width: 100vh;
  height: 100vh;
  padding-top: 67px;
`;
const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ListButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FirstList = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  padding: 0 25px 0 20px;
`;
const First = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
`;
const List = styled.button`
  background-color: #3d8aff;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  width: 137px;
  height: 40px;
`;
const ListCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  font-size: 18px;
`;
const InputTitle = styled.span`
  font-size: 22px;
`;

export default PostList;
