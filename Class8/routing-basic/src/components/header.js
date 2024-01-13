import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
        {/* <a href='/'>Home</a>
        <a href='/page1'>Page1</a>
        <a href='/page2'>Page2</a> */}
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </nav>
    )
}

export default Header;