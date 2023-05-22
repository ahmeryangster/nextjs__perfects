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
          <div className="custom-shape-divider-bottom-1684749746">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
        </svg>
      </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
