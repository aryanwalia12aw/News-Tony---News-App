import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import NewsElement from "./NewsElement";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Spinner from "./Spinner"




const NewsPage = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
      
    
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7e52a54f39644368a731d9b7425d479c&page=${page}&pageSize=${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a9cafc58889741ff8c1524c09ad5a5c9&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);

    let data = await fetch(url);
    let parsedData = await data.json();


    setArticles(parsedData.articles);
    props.setProgress(50);

    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);

  };
  useEffect(()=>{
    updateNews();
  document.title = capitalizeFirstLetter(props.category)+ " - Tony News"

    
  }, [])
  

  const handlePrevClick = () => {
    setPage(page - 1);

    updateNews();
  };
  const handleNextClick = () => {
    setPage(page + 1);

    updateNews();
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7e52a54f39644368a731d9b7425d479c&page=${page +1 }&pageSize=${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a9cafc58889741ff8c1524c09ad5a5c9&page=${page}&pageSize=${props.pageSize}`;
    
    setPage(page + 1);

    let data =  await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div className="container my-3 ">
      <h1 style={{marginTop: "57px"}}  >
        <strong>
          News Tony - Top {capitalizeFirstLetter(props.category)} Headlines
        </strong>
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length != totalResults}
        loader = {<h4> <Spinner  /></h4>} 
      >
        <div className="row my-3 mx-5 ">
          {articles.map ((element ,index ) => {
            return (
              <div className="col-md-4 my-3" key={index}>
               
                <NewsElement
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  MODE = {props.mode}
                  TEXT = {props.text}
                  
            
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

NewsPage.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

NewsPage.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default NewsPage;
