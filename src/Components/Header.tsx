import React from 'react';

import { Select } from 'antd';

//import icons
import newsIcon from '../Icons/news-icon.png';
import cloudIcon from '../Icons/cloud.png';
import calenderIcon from '../Icons/calendar.png';
import locationIcon from '../Icons/location.png';

import './header.css'; 



const { Option } = Select;


const Header = () => {

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //Current Date
    const today:Date = new Date();

    //Track the change in Select
    const handleChange = (value: string) => {
        console.log('selected', { value });
    }



    return (
        <nav className="navbar navbar-expand-xl navbar-main ">
            <div className="news-bulletin-logo-div text-nowrap">
                <img src={newsIcon} alt="" className="news-icon" />
                <h1 className="news-bulletin-logo">
                    <span style={{ fontWeight: 600, color: '#4B5AA5' }}>NEWS</span> Bulletin
                </h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-secondary" id="navbarNavDropdown">
                <div className='navbar-nav  text-wrap'>
                    <div className="navbar-secondary-items">
                        <p className="secondary-texts" >Kerala</p>
                        <img src={cloudIcon} className="ms-3" alt="" />
                        <p className="secondary-texts" style={{fontWeight:500}}>28&deg;C</p>
                        <img src={locationIcon} title="Use precise location" className="location ms-3" alt="" />
                    </div>
                    <div className="navbar-secondary-items">
                        <img src={calenderIcon} className="ms-3" alt="" />
                        <p className="secondary-texts">
                            <span style={{fontWeight:500}}>{today.getDate()} {monthNames[today.getMonth()]}</span> , {weekNames[today.getDay()]}
                        </p>
                    </div>
                    <div className="navbar-secondary-items">
                        <p className="secondary-texts me-2">Language : </p>
                        <Select defaultValue="English" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="English">English</Option>
                            <Option value="Malayalam">Malayalam</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;











