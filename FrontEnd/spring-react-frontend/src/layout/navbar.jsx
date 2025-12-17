import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
            <Link to="/" className="navbar-brand">FullStack CRUD</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <div className="ms-auto"> {/* Pushes content to the right in Bootstrap 5 */}
                    <Link to="/addEmployee" className='btn btn-outline-light'>Add Employee</Link>
                </div>
            </div>
        </nav>
    )
}

