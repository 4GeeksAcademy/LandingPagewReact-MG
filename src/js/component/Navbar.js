import React from 'react';

const Navbar = () => {
    return (
        //L Start bootstrap
        //R Home About Services Contact
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon color-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;