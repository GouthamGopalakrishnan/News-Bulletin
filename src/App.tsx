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

//axios
import axios from 'axios';


type MyProp = {
  loading:Boolean,
  data:NewsAPI | null
}

const NewsBulletin = () => {
  const [newsList,setNewsList] = React.useState<MyProp>({loading: false, data:null});
  const [searchValue , setSearchValue] = React.useState<string>('');
  const [result,setResult] = React.useState<string>('');
  const [language,setLanguage] = React.useState<string>('en');


  const { Search } = Input;

  
  React.useEffect(() => {
    setNewsList({loading:true,data:null});
    // GET request using axios inside useEffect React hook
    axios.get('https://newsapi.org/v2/top-headlines?q=india&language='+language+'&sortBy=publishedAt&apiKey=e59fd897898a42d68d07b44c0229d7e8')
        .then(response => {
          const allData = response.data;
          setNewsList({loading:false,data:allData})
        });
      setSearchValue('');
}, []);

   const checking = () => {
     if ((newsList.data !== null) && (newsList.data?.articles.length >0)) {
        return (
          <>
          <PrimaryCard data={newsList.data.articles[0]}/>
          <NewsCard data = {newsList.data}/>
          <Footer />
          </>
        )
   }
      else{
        // setSearchValue('')
        return <h4 style={{textAlign:'center'}}>No Results</h4>

   }
  }


  const onChangeSearch:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  };

  const handleSearch = (value:string) => {
    setSearchValue('')
    setResult(value)
    const searchUrl:string ='https://newsapi.org/v2/top-headlines?q='+value+'&language='+language+'&sortBy=publishedAt&apiKey=e59fd897898a42d68d07b44c0229d7e8' ;
    setNewsList({loading:true,data:null});
    axios.get(searchUrl)
    .then(response => {
      const allData = response.data;
      setNewsList({loading:false,data:allData})
      
    });
  }
  const resultDisplay = () => {
    if ((newsList.data !== null) && (newsList.data?.articles.length >0)) {
      return <h5 className="results">Results for "<span style={{color:'#4B5AA5'}}>{result}</span>"</h5>
  }}

  const handleLanguage = (value:string) =>{
    setLanguage(value);
    setNewsList({loading:true,data:null});
    console.log("selected language",value)
    // GET request using axios inside useEffect React hook
    axios.get('https://newsapi.org/v2/top-headlines?q='+result+'&language='+value+'&sortBy=publishedAt&apiKey=e59fd897898a42d68d07b44c0229d7e8')
        .then(response => {
          const allData = response.data;
          setNewsList({loading:false,data:allData})
        });
      setSearchValue('');
    console.log("selected language",value)
  }

  return (
    <div className="container-fluid bulletin-main">

      <Header selectedLanguage={handleLanguage}/>
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
      {
        (result === '')? '': resultDisplay()
      }
      {
        newsList.loading === false ? checking() : <Skeleton />
      }
      {/* <PrimaryCard data={newsList.repos.articles[0]}/>
      <NewsCard data = {newsList.repos}/> */}
      
      
    </div>
  );
}

export default NewsBulletin;
