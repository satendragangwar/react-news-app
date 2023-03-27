import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  const [articles ,setArticles] = useState([])
  const [loading ,setloading] = useState(true)
  const [page ,setPage] = useState(1)
  const [totalResults ,setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    

    const  updateNews = async ()=>{
      props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize= ${props.pageSize}`;
      
        setloading(true)
        let data =  await fetch(url);
        let parsedData = await data.json()
       setArticles(parsedData.articles)
       setTotalResults(parsedData.totalResults)
       setloading(false)
        
        props.setProgress(100)

    }

    useEffect(()=>{
      document.title = `${capitalizeFirstLetter(props.category)} - News App`;
      
      updateNews();
      // eslint-disable-next-line
      

    },[])


    
    //  const handlePrevClick = async () =>{
    //   setPage(page-1)
    //   updateNews();
    // }
    //  const handleNextClick = async () =>{ 
      
    //   setPage(page+1)
    //   updateNews();  
    // }


    const fetchMoreData = async () => {
      
      
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize= ${props.pageSize}`;
      setPage(page+1)
        let data =  await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
       
     
    };

  
    return ( 
      <>

        <h2 className='text-center'>News - Top  {capitalizeFirstLetter(props.category)} Headlines </h2>

        {loading &&<Spinner />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">

        <div className="row">
        {articles.map((element)=>{
           return <div className="col md-4 my-3" key = {element.url}>
            <NewsItem  title = {element.title?element.title:""} description={element.description?element.description:""} imageUrl ={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt}/>
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  
}


News.defaultProps = {
  country: 'in',
  pageSize : 6,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category :PropTypes.string
}


export default News
 