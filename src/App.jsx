import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx"
//layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";
//pages
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import PostPage from "./pages/PostPage.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import PostDetailPage from "./pages/PostDetailPage.jsx"
import Page404 from "./pages/Page404.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/about_us" element={<AboutPage />} ></Route>
            <Route path="/posts">
              <Route path="" element={<PostPage />} ></Route>
              <Route path=":id" element={<PostDetailPage />} ></Route>
            </Route>
            <Route path="/post_form" element={<CreatePost />} ></Route>
            {/* page 404 */}
            <Route path="*" element={<Page404 />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
