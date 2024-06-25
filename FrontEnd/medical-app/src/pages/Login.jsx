import React from "react"
import { Link } from "react-router-dom"

const Login = () => {

    return (
        <div>
            <div className="bg-light" style={{ height: '100vh' }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">MERN Profile</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Profile</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <div className="mx-4">
                                    <Link className="btn btn-outline-primary" to="/login">Login</Link>
                                    <Link className="btn btn-outline-primary" to="/register">Register</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container p-4 mt-4">
                    <div className="row justify-content-evenly mt-4">
                        <div className="col-lg-6 col-md-12 mt-4">
                            <div className="d-flex">
                                <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Login</h2>
                            </div>
                            <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                                <form>
                                    <div className=" mb-3">
                                        <label className="form-label">Email address</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-at"></i></span>
                                            <input type="text" className="form-control" />
                                        </div>

                                    </div>
                                    <div className=" mb-3">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
                                            <input type="password" className="form-control" />
                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                                        <Link to="/register">I don't have account</Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;