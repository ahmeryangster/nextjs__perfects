// 'use client'
import React from 'react'

const page = async ({params}) => {
    const id = params.id;


    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}=80057281&lang=en`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '19f44f1d8dmshdf7b0ae794329c8p12f675jsnd95f61cda21a',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};



    // const url = `https://netflix54.p.rapidapi.com/search/?ids=${id}?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '19f44f1d8dmshdf7b0ae794329c8p12f675jsnd95f61cda21a',
    //     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    //   }
    // };
    
    
    
      const res = await fetch(url, options);
      const data = await res.json();
      const main_data = data[0].details;

      console.log(main_data);


  return (
    <>
    <h1>I am dynamic route {id}</h1>
    <div>
        <div><h1>Netflix \ <span> {main_data.type} </span></h1></div>
        <div><h1>Netflix \ <span> {main_data.title} </span></h1></div>
        <div><h1>Netflix \ <span> {main_data.synopsis} </span></h1></div>
    </div>
    </>
  )
}

export default page