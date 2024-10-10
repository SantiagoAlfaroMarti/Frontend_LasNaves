import React from 'react'
import "./Home.css";

export const Home = () => {
  return (
    <div className="carousel-container">
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="Multi-purpose room"
              className="d-block carousel-image"
              src="../../img/homeWork.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                Cutting-edge areas
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Join us and bring your ideas to reality in our collaborative environments.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Last generation"
              className="d-block carousel-image"
              src="../../img/hometech.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                High performance and future
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Equipped with cutting-edge technology to propel your ideas to new horizons.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Cooperative environment"
              className="d-block carousel-image"
              src="../../img/homeComunity.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                Passionate collective
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Join a community of innovators who share your passion for creativity.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};