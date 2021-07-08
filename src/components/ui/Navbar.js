import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
             <div className="container">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel">
                                Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc">
                                DC
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/login">
                                Logout
                        </NavLink>
                    </div>

                </div>

                {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav">
                    </ul>
                </div> */}

            </div>
        </nav>
    )
}