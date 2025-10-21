import React from "react";
import img1 from "./hongkong.jpg";
import img2 from "./japan.webp";
import img3 from "./lasvegas.webp";
import img4 from "./macao.webp";

const Carousel = () => {
    return (
        <div className="container mt-4">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={img1}
                            className="d-block w-100"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img2}
                            className="d-block w-100"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img3}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img4}
                            className="d-block w-100"
                            alt="Slide 4"
                        />
                    </div>
                </div>

                {/* Carousel control */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;