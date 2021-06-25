import React from 'react';

import { Select } from 'antd';

//import icons
import newsIcon from '../Icons/news-icon.png';
import cloudIcon from '../Icons/cloud.png';
import calenderIcon from '../Icons/calendar.png';
import locationIcon from '../Icons/location.png';

import { LocationAPI, WeatherAPI } from '../types/types';

import './header.css'; 
import axios from 'axios';




const { Option } = Select;

type Weather = {
    loading:boolean,
    data:WeatherAPI | null 
}
type LocationProp = {
    loading:boolean,
    data:LocationAPI |null
}

type MyProp = {
    selectedLanguage:(value:string) => void
}

const Header = (prop:MyProp) => {
    const [latitude,setLatitude] = React.useState<number>(10);
    const [longitude,setLongitude] = React.useState<number>(76.25);
    const [weatherList,setWeatherList] = React.useState<Weather>({loading: false, data:null});
    const [locationList,setLocationList] = React.useState<LocationProp>({loading: false, data:null});



    // fetch weather details of Delhi
    React.useEffect(() => {
        setWeatherList({loading:true,data:null});
        setLocationList({loading:true,data:null});
        axios.all([
            axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=28.7041&lon=-77.1025&units=metric&exclude=hourly,minutely,daily&appid=29e23408cfad2c66acb03a3e9d7d6d22'),
            axios.get('https://us1.locationiq.com/v1/reverse.php?key=pk.65331898a7697eb57d0e00951b6bb830&lat=28.7041&lon=77.1025&format=json')
    
        ]).then(axios.spread((weather,location) => {
            setWeatherList({loading:false,data:weather.data});
            setLocationList({loading:false,data:location.data})
        }))
    },[]);

    console.log("weather",weatherList);




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
        prop.selectedLanguage(value)
    }
    //Geolocation API is used to get the geographical position of a user.
    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        }
        else { 
            alert("Sorry, your browser does not support HTML5 geolocation.");       
        }

    }
     
    //set latitute and longitude of the user
    const showPosition = (position:GeolocationPosition) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        apiCall()
    }

    //Call API for weather details and location detail
    const apiCall = () => {
        const weatherUrl:string = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=metric&exclude=hourly,minutely,daily&appid=29e23408cfad2c66acb03a3e9d7d6d22&appid=29e23408cfad2c66acb03a3e9d7d6d22'
        const locationUrl:string = 'https://us1.locationiq.com/v1/reverse.php?key=pk.65331898a7697eb57d0e00951b6bb830&lat='+latitude+'&lon='+longitude+'&format=json';
        setWeatherList({loading:true,data:null})
        setLocationList({loading:true,data:null})
        axios.all([
            axios.get(weatherUrl),
            axios.get(locationUrl)

        ]).then(axios.spread((weather,location) => {
            setWeatherList({loading:false,data:weather.data});
            setLocationList({loading:false,data:location.data})
        }))
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-main ">
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
                        <p className="secondary-texts" >{locationList.data?.address.state}</p>
                        <img src={cloudIcon} className="ms-3" alt="" />
                        <p className="secondary-texts" style={{fontWeight:500}}>{weatherList.data?.current.temp}&deg;C</p>
                        <img src={locationIcon} title="Use precise location" className="location ms-3" alt="" onClick={getLocation}/>
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
                            <Option value="en">English</Option>
                            <Option value="ar">Arabic</Option>
                            <Option value="de">German</Option>
                            <Option value="es">Spanish</Option>
                            <Option value="fr">French</Option>
                            <Option value="he">Hebrew</Option>
                            <Option value="it">Italian</Option>
                            <Option value="nl">Dutch</Option>
                            <Option value="no">Norwegian</Option>
                            <Option value="ru">Russia</Option>
                            <Option value="se">Northern Sweden</Option>
                            <Option value="zh">Chinese</Option>
                            
                        </Select>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;











