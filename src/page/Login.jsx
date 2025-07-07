import React from "react";
import styled from "@emotion/styled";
import Picture from "../assets/eye-img.svg";

const Login = () => {
  return (
    <Body>
      <TotalContainer>
        <LoginBox>
          <LoginTitle>로그인</LoginTitle>
          <Line></Line>
        </LoginBox>
        <IdContainer>
          <IdTitle>아이디</IdTitle>
          <IdInput type="text" placeholder="아이디를 입력해주세요." />
        </IdContainer>
        <Pwdbox>
          <PwdTitle>비밀번호</PwdTitle>
          <PwdContainer>
            <PwdInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></PwdInput>
            <img src={Picture} alt="" />
          </PwdContainer>
        </Pwdbox>
        <LoginButton>로그인</LoginButton>
        <NoUser>
          계정이 없으신가요?
          <JoinUser href="https://www.naver.com/">회원가입</JoinUser>
        </NoUser>
      </TotalContainer>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 483px;
  height: 470px;
  gap: 30px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 500;
`;

const LoginTitle = styled.p`
  font-size: 30px;
`;

const IdTitle = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
  color: #555555;
`;

const IdContainer = styled.div`
  width: 100%;
  height: 46px;
  margin-bottom: 40px;
`;

const IdInput = styled.input`
  width: 100%;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 4px;
  padding-left: 12px;
  margin-bottom: 40px;
`;

const PwdContainer = styled.div`
  margin-bottom: 38px;
  border: 1px solid #999999;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding-right: 12px;
`;

const PwdTitle = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
  color: #555555;
`;

const PwdInput = styled.input`
  width: 100%;
  height: 46px;
  padding-left: 12px;
  border: none;
`;

const Pwdbox = styled.div``;

const Line = styled.hr`
  border: 1px solid #3d8aff;
  width: 100%;
  margin-bottom: 56px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #3d8aff;
  color: white;
  opacity: calc(50%);
  border: 0;
  border-radius: 4px;
`;

const NoUser = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

const JoinUser = styled.a`
  color: #3d8aff;
  text-decoration: none;
`;

export default Login;
