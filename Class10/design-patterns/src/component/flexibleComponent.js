
import React, { useState } from 'react';

const FlexiblePattern = () => {
    return (
        <NavBar defaultActiveIndex={1}>
            <NavBar.Item title="" href="">Link 1</NavBar.Item>
            <NavBar.Item title="" href="">Link 2</NavBar.Item>
            <NavBar.Item title="" href="">Link 3</NavBar.Item>
            <NavBar.Item title="" href="">Link 4</NavBar.Item>
        </NavBar>
    )
}

const NavBar = ({ children, defaultActiveIndex }) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    return (
        <div className="navbar">{
            React.Children.map(children, (child, idx) => {
                return React.cloneElement(child, {
                    index: idx,
                    active: activeIndex === idx,
                    onClick: (ev) => { ev.preventDefault(); setActiveIndex(idx)}
                })
            })
        }</div>
    )
}

NavBar.Item = ({href, children, onClick, active, index}) => {
    return (<a href={href} className={active ? 'active' : ''} onClick={onClick}>{children}</a>)
}

export default FlexiblePattern;


