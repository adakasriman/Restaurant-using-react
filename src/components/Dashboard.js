import React, { useEffect, useState } from 'react';
import { Link, useLinkClickHandler, useNavigate } from 'react-router-dom';
import Header from './Header';

const restaurantListItems = ['Nava Nidhi', 'Aasthana Bhojanam', 'Ruchi Ruchi', 'Swarna Bhojanam', 'Swaad Sagar'];

const Dashboard = () => {
    const navigate = useNavigate();
    const [restaurantList, setRestaurantList] = useState(restaurantListItems || [])
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const changeHandler = (e) => {
        setSearchValue(e.target.value)
        if (e.target.value == '') {
            setRestaurantList(restaurantListItems);
        }
    }
    const clickHandler = (e) => {
        e.preventDefault();
        setRestaurantList(restaurantListItems.filter((restaurant) =>
            restaurant.toLowerCase().includes(searchValue)
        ))
    }
    return (
        <div>
            <div className="border-bottom">
                <Header pageName="Dashboard" />
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Restaurant..."
                                aria-label="Search"
                                onChange={(e) => changeHandler(e)}
                                value={searchValue}
                            />
                            <button className="btn btn-outline-secondary search-icon" type="submit">
                                <span className="ml-1" onClick={(e) => clickHandler(e)}>Search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="px-3 table table-hover">
                    <thead className="border-bottom">
                        <tr>
                            <th className=''>
                                restaurant
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            restaurantList.map((item, index) => {
                                return <tr key={index}>
                                    <td className="">
                                        <div className="">
                                            <span className="">{index + 1}</span> {item}
                                        </div>
                                    </td>
                                    <td className="">
                                        <Link to={`/restaurant/${encodeURIComponent(item)}`}>View</Link>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard