import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import PostList from "./page/PostList";
import CheckPost from "./page/CheckPost";
import PostCreate from "./page/PostCreate";
import PostEdit from "./page/PostEdit";
import MyPage from "./page/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<PostList />} />
      <Route path="/check-post/:id" element={<CheckPost />} />
      <Route path="/post-create" element={<PostCreate />} />
      <Route path="/post-edit" element={<PostEdit />} />
      <Route path="/MyPage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
