import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog Tracker</h1>
            <ul className="links">
                <li href="/">Home</li>
                <li href="/create" style={{
                    color: "white",
                    backgroundColor: "red"
                }}>New Blog</li>
            </ul>
        </nav>
    )
}

export default Navbar
