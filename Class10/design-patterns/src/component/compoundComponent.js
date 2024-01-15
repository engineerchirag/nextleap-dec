const CompoundPattern = () => {
    return (
        <NavBar>
            <NavBarItem link="a">Title 1</NavBarItem>
            <NavBarItem link="b">Title 2</NavBarItem>
            <NavBarItem link="c">Title 3</NavBarItem>
            <NavBarItem link="d">Title 4</NavBarItem>
            <NavBarItem link="e">Title 5</NavBarItem>
        </NavBar>
    )
}

const NavBar = ({ children }) => {
    return (
        <div className="navbar">{children}</div>
    )
}

const NavBarItem = ({ children, link }) => {
    return (
        <a href={link}>{children}</a>
    )
}

export default CompoundPattern;

{/* <div className="navbar">
    <a href={href1}>{title1}</a>
    <a href={href2}>{title2}</a>
    <a href={href3}>{title3}</a>
    <a href={href4}>{title4}</a>
    <a href={href5}>{title5}</a>
</div> */}