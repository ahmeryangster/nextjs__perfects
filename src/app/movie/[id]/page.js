// 'use client'
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}=80057281&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19f44f1d8dmshdf7b0ae794329c8p12f675jsnd95f61cda21a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
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
  const cast = main_data.cast;
  const genres = main_data.genres;

  return (
    <>
      <div className="container mt-4">
        <div>
          <h3 className="mb-3">
            Netflix \{" "}
            <span className="movie_type_span"> {main_data.type} </span>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div>
                <Image
                  className="detail_movie_img"
                  src={main_data.backgroundImage.url}
                  width={400}
                  height={300}
                  alt={main_data.title}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3 className="movie_details_title mb-2">{main_data.title}</h3>
                <p className="mb-2">Release Year: {main_data.releaseYear}</p>
                <p>{main_data.synopsis}</p>
                <div className="mt-2">
                  {/* Cast: {cast.map((currEle) => <span>{currEle.name}</span>).join(", ")} */}
                  <span className="fw-bold">Cast :</span>{" "}
                  {cast
                    .map((currEle) => (
                      <span key={currEle.id}>{currEle.name}</span>
                    ))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </div>
                <div className="mt-2">
                  {/* Cast: {cast.map((currEle) => <span>{currEle.name}</span>).join(", ")} */}
                  <span className="fw-bold">Generes :</span>{" "}
                  {genres
                    .map((currEle) => (
                      <span key={currEle.id}>{currEle.name}</span>
                    ))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
