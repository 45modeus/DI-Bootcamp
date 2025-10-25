import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//images
import img1 from "./hongkong.jpg";
import img2 from "./japan.webp";
import img3 from "./lasvegas.webp";
import img4 from "./macao.webp";

const ReactCarousel = () => {
    return (
        <div className="container mt-4">
            <Carousel 
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                stopOnHover={true}
            >
                <div>
                    <img src={img1} alt="Hong Kong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={img2} alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={img3} alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src={img4} alt="Macao" />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        </div>
    );
}

export default ReactCarousel;