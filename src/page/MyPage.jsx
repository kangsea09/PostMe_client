import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Picture from "../assets/people.svg";
import Img from "../assets/arrow.svg";
import Cat from "../assets/cat.svg";
import { useNavigate } from "react-router-dom";
import { mypage } from "../apis/auth";

const MyPage = () => {
  const [user, setUser] = useState({ id: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await mypage();
        setUser(res);
      } catch (err) {
        console.error("마이페이지 정보를 불러오지 못했습니다:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Body>
      <Container>
        <TextList>
          <ListText onClick={() => navigate("/")}>게시물 목록</ListText>
          <img src={Img} alt="" />
          <CheckText>마이페이지</CheckText>
        </TextList>
        <ProfileBox>
          <ProfileButton>
            <img src={Picture} alt="" />
          </ProfileButton>
          <TextBox>
            <NameText>{user.name}</NameText>
            <EmailText>{user.email}</EmailText>
          </TextBox>
        </ProfileBox>
        <CatImg src={Cat} alt="" />
      </Container>
    </Body>
  );
};
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CatImg = styled.img`
  margin-left: 69px;
  margin-bottom: 185px;
`;

const TextList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-top: 67px;
  padding-bottom: 92px;

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
const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 118px;
`;
const ProfileButton = styled.button`
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameText = styled.span`
  font-size: 38px;
  font-weight: bold;
  padding-bottom: 4px;
`;
const EmailText = styled.span`
  font-size: 22px;
  color: #6d6d6d;
`;
export default MyPage;
