// import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import {NewsAPI} from './types/types';
import { Input } from 'antd';


import Header from './Components/Header';
import NewsCard from './Components/NewsCard';
import PrimaryCard from './Components/PrimaryCard';
import Footer from './Components/Footer';
import Skeleton from './Components/Skeleton';

import NoResults from './Components/NoResults';
import SomethingWentWrong from './Components/SomethingWentWrong';

//axios
import axios from 'axios';


type MyProp = {
  loading:Boolean,
  data:NewsAPI | null
}

const NewsBulletin = () => {

  //State variables
  
  const [newsList,setNewsList] = React.useState<MyProp>({loading: false, data:null});
  const [searchValue , setSearchValue] = React.useState<string>('');
  const [result,setResult] = React.useState<string>('');
  const [language,setLanguage] = React.useState<string>('en');
  const [error,setError] = React.useState<boolean>(false);


  const { Search } = Input;

  const permenantKey:string = 'e59fd897898a42d68d07b44c0229d7e8';
  // const temporaryKey:string = '0c7b1150570d4764b0530fbdd1468897'; //Temporary Key
  React.useEffect(() => {
    setNewsList({loading:true,data:null});
    // GET request using axios inside useEffect React hook
    axios.get('https://newsapi.org/v2/top-headlines?q=india&language=en&sortBy=publishedAt&apiKey='+permenantKey)
        //Success handler
        .then(response => {
          const allData = response.data;
          setNewsList({loading:false,data:allData})
        })
        //Error Handler
        .catch(error => {
          console.log(error)
          setError(true)
          setNewsList({loading:false,data:null})
        })
        
      setSearchValue('');
}, []);

   const checking = () => {
    //Checks for news
     if ((newsList.data !== null) && (newsList.data?.articles.length >0)) {
        return (
          <>
          <PrimaryCard data={newsList.data.articles[0]}/>
          <NewsCard data = {newsList.data}/>
          <Footer />
          </>
        )
   }
   //Checks for error
      if (error ===true){
        return <SomethingWentWrong />

      }
      //Handles No News
      else {
        return <NoResults />
      }
  }

  //Track the change in search bar
  const onChangeSearch:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  };

  //API call according to the search 
  const handleSearch = (value:string) => {
    setSearchValue('')
    setResult(value)
    const searchUrl:string ='https://newsapi.org/v2/top-headlines?q='+value+'&language='+language+'&sortBy=publishedAt&apiKey='+permenantKey ;
    setNewsList({loading:true,data:null});
    axios.get(searchUrl)
    //Success
    .then(response => {
      const allData = response.data;
      setNewsList({loading:false,data:allData})
      
    })
    //Error
    .catch(error => {
      console.log(error)
      setNewsList({loading:false,data:null})
      setError(true)
      
    });
  }

  //Returns { Results for "Search query" }
  const resultDisplay = () => {
    if ((newsList.data !== null) && (newsList.data?.articles.length >0)) {
      return <h5 className="results">Results for "<span style={{color:'#4B5AA5'}}>{result}</span>"</h5>
  }}

  //API call according to language selected
  const handleLanguage = (value:string) =>{
    setLanguage(value);
    setNewsList({loading:true,data:null});
    console.log("selected language",value)
    axios.get('https://newsapi.org/v2/top-headlines?q='+result+'&language='+value+'&sortBy=publishedAt&apiKey='+permenantKey)
    //Success
        .then(response => {
          const allData = response.data;
          setNewsList({loading:false,data:allData})
        })
    //Error
        .catch(error => {
          console.log(error)
          setNewsList({loading:false,data:null})
          setError(true)
        });
      setSearchValue('');
    console.log("selected language",value)
  }

  return (
    <div className="container-fluid bulletin-main">
      <Header selectedLanguage={handleLanguage}/>
      
      {/* Search Bar */}
      <div className='row search-row'>
            <Search
            placeholder='Search NewsBulletin'
            value={searchValue}
            onChange={onChangeSearch}
            allowClear
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
            className="search-bar"
            
            />
            </div>
      {/* display text according to search */}
      {
        (result === '')? '': resultDisplay()
      }
      {/* display component according to loading status */}
      {
        (newsList.loading === true) ? <Skeleton />:checking()  
      }
      
      
    </div>
  );
}

export default NewsBulletin;
