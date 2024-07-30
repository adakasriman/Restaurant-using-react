import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import MenuList from './MenuList';

const menuList = {
    veg: ['paneer', 'baby corn', 'mushroom', 'pappu', 'curd'],
    nonVeg: ['mutton birayani', 'chicken birayani', 'fish fry', 'prawns fry', 'crab curry']
}

const RestaurantView = () => {
    const { id } = useParams();
    const headerName = `Restaurant Details(${id})`
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    return (
        <div>
            <div className="border-bottom">
                <Header pageName={headerName} />
            </div>
            <div className="container mt-3">
                <div className="text-end">
                    <button className='btn btn-secondary mb-2'>Add Menu Item</button>
                </div>
                
                <table className="px-3 border table table-hover">
                    <thead className="border-bottom">
                        <tr>
                            <th className=''>
                                Name
                            </th>
                            <th>
                                Owner
                            </th>
                            <th>
                                Place
                            </th>
                            <th>
                                Restaurant Rating
                            </th>
                            <th>
                                Table Count
                            </th>
                            <th>
                                Since
                            </th>
                            <th>Menu List</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td>{id}</td>
                            <td>shiva</td>
                            <td>Ongole</td>
                            <td>4 star</td>
                            <td>6</td>
                            <td>10-10-2023</td>
                            <td className="">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Menu
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container mt-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4>Workers</h4>
                    <button className='btn btn-secondary'>Add Worker</button>
                </div>
                
                <table className="px-3 border table table-hover">
                    <thead className="border-bottom">
                        <tr>
                            <th className=''>
                                Name
                            </th>
                            <th>
                                salary
                            </th>
                            <th>
                                work Timing
                            </th>
                            <th>
                                Shift
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td>Sivaji</td>
                            <td>12,222</td>
                            <td>day shift</td>
                            <td>10 am to 8 pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <MenuList menuList={menuList} />
        </div>
    )
}

export default RestaurantView