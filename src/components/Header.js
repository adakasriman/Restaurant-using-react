import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login');
    };

    return (
        <div className="py-2 px-3 d-flex align-items-center justify-content-between">
            <h4>{props.pageName}</h4>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><div className="dropdown-item text-danger" style={{ cursor: 'pointer' }} onClick={logout}>Logout</div></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
