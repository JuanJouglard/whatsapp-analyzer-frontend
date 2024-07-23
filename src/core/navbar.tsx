import "./navbar.css"
type Link = {
    route: string,
    label: string,
}

const links: Link[] = [
    {
        route: "/home",
        label: "Home"
    }
]

export default function NavBar() {
    return <nav className="navbar">
            {
                links.map((link) => <a href={link.route}>{link.label}</a>)
            }
            </nav>
}
