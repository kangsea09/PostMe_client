import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Picture from "../assets/arrow.svg";
import { checkPost } from "../apis/post";
import { useNavigate, useParams } from "react-router-dom";

const CheckPost = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  
  const toPostList = () => {
    navigate("/")
  }

  useEffect(()=> {
    const fetchData = async() => {
      const res = await checkPost(id);
      setPost(res);
    };
    fetchData();
  }, []);

  return (
    <Body>
      <TotalContainer>
        <TextList>
          <ListText onClick={toPostList}>게시물 목록</ListText>
          <img src={Picture} alt="" />
          <CheckText>게시글 상세 확인</CheckText>
        </TextList>
        <TextTitle>{post.title}</TextTitle>
        <BtnContainer>
          <UpdateBtn>수정하기</UpdateBtn>
          <DeleteBtn>삭제하기</DeleteBtn>
        </BtnContainer>
        <Line />
        <ContentText>
          {post.content}
        </ContentText>
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

const TextList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-bottom: 49px;

  img {
    width: 20px;
    height: 20px;
  }
`;
const ListText = styled.span`
  font-size: 18pt;
  color: #999999;
  cursor: pointer;
`;
const CheckText = styled.span`
  font-size: 18pt;
  font-weight: bold;
  color: #555555;
`;
const TextTitle = styled.span`
  font-size: 30pt;
  color: #121212;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 63px;
`;

const UpdateBtn = styled.button`
  color: #3d8aff;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #3d8aff;
  font-size: 15px;
  padding: 18px 14px;

  &:hover {
    background-color: #3d8aff;
    color: white;
  }
`;

const DeleteBtn = styled.button`
  color: #ff4646;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ff4646;
  font-size: 15px;
  padding: 18px 14px;

  &:hover {
    background-color: #ff4646;
    color: white;
  }
`;

const Line = styled.hr`
  border: 1px solid #eeeeee;
  margin-bottom: 36px;
`;

const ContentText=styled.span``

export default CheckPost;
