import React , {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Post from "../assets/Frame.svg";
import { getPost } from "../apis/post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async ()=> {
      const res = await getPost();
      setPostList(res);
    }
    fetchData();
  }, []);
  
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, "/") // "25. 09. 19." → "25/09/19"
    .replace(/\s/g, ""); // 공백 제거
};

const handleClick = (id) => {
  navigate(`/check-post/${id}`);
}

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
              <List onClick={() => navigate("/post-create")}>게시글 작성하기</List>
            </ListButton>
            {postList.map((post)=> (
              <ListCard key={post.id} onClick={()=> handleClick(post.id)}>
              <Title>
                <InputTitle>{post.title}</InputTitle>
                <span>{formatDate(post.createdAt)}</span>
              </Title>
            </ListCard>
            ))}
            
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
  cursor: pointer;
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
