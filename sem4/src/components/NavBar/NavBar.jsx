import { NavLink } from "react-router-dom";
import './NavBar.sass'

export default function NavBar() {
    return <>
        <NavLink to={'/'}> Home</NavLink>
        <NavLink to={'/about'}> About</NavLink>
        <NavLink to={'/character'}> Characters</NavLink>
    </>
}