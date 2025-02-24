import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx"
//layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";
//pages
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import PostPage from "./pages/PostPage.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/about_us" element={<AboutPage />} ></Route>
            <Route path="/posts" element={<PostPage />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
