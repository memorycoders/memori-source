import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">ducduong. </Link>
                <ul className="header-nav">
                    <li>
                        <Link to="/">bài viết<span>.</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;