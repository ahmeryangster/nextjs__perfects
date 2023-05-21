import React from "react";
import MovieCards from "../components/MovieCards";
import Link from "next/link";

const movie = async () => {
  // const url = process.env.RAPID_KEY;
  // const url = "https://dummyapi.online/api/movies";
  // const options = {
  //   method: "GET",
  // };



  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '19f44f1d8dmshdf7b0ae794329c8p12f675jsnd95f61cda21a',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};



  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data);


  


  // fetch('https://dummyapi.online/api/movies')
  //       .then(response => response.json())
  //       .then(json => console.log(json))

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="row">
              {main_data.map((currEle) => {
                return <MovieCards key={currEle.id} {...currEle} />;
              })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default movie;
