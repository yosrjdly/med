import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Medical App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Profile</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="mx-4">
                                <Link className="btn btn-outline-primary" to="/login">Login</Link>
                                <Link className="btn btn-outline-primary" to="/register">Register</Link>
                                <span className="text-black-50">Admin</span>
                                <Link className="btn btn-outline-primary" to="/login">Logout</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar