import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({title}) => {
  return (
    <>
      <section>
        <div className="container-fluid hero_main">
          <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mx-2">
                <h1 className="hero_heading my-3">{title}</h1>
                <p className="my-2">
                  Ahmerflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <button className="hero_explore_btn">Explore Movies</button>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <Link href="/">
                  <Image
                  className="hero_image"
                    src="/home_hero_image.png"
                    width={450}
                    height={280}
                    alt="home_hero_image"
                  />
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
