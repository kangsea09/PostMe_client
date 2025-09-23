import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import PostList from "./page/PostList";
import CheckPost from "./page/CheckPost";
import PostCreate from "./page/PostCreate";
import PostEdit from "./page/PostEdit";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/checkPost" element={<CheckPost />} />
      <Route path="/postcreate" element={<PostCreate />} />
      <Route path="/postedit" element={<PostEdit />} />
    </Routes>
  );
}

export default App;
