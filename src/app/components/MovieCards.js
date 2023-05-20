import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCards = (currEle) => {
    // console.log(currEle.id)
    const {id, title ,synopsis} = currEle.jawSummary;
    // console.log(id)
    // console.log(currEle.jawSummary)
  return (

            <div className='col-md-3 mb-2'>
            <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <Image
                  className="card-img-top"
                    src={currEle.jawSummary.backgroundImage.url}
                    width={250}
                    height={200}
                    alt="movie_title"
                  />
        <div className="card-body">
          <h5 className="card-title">{`${title.substring(0,18)}...`}</h5>
          <p className="card-text">{`${synopsis.substring(0,50)}...`}</p>
          <Link href={`/movie/${id}`} className="btn btn-primary">Read More</Link>
        </div>
      </div>
            </div>

  )
}

export default MovieCards