import { Link } from "react-router-dom"
const Nav = () => {
    return(
        <div>
            <Link to="/">
            <h2 className="nav">Pets</h2>
            </Link>
        </div>
    )
}

export default Nav