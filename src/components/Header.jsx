import { NavLink } from "react-router-dom"

const navLinks = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Chi Siamo", url: "/about_us" },
    { id: 3, text: "Posts", url: "/posts" },
    { id: 4, text: "PostForm", url: "/post_form" },
]

export default function Header() {

    return (
        <header>
            <h1>Blog</h1>

            <nav>
                {navLinks.map(el => <NavLink key={el.id} to={el.url}>{el.text}</NavLink>)}
            </nav>

            <div>Login</div>
        </header>
    )
}
