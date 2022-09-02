import { useState } from "react";
import "./gallery.css";

import img from "../../Images/IMG_-06.jpg";
import img1 from "../../Images/IMG_-07.jpg";
import img2 from "../../Images/IMG_-08.jpg";
import img3 from "../../Images/IMG_-09.jpg";
import img4 from "../../Images/IMG_-10.jpg";
import img5 from "../../Images/IMG_-14.jpg";
import img6 from "../../Images/IMG_-15.jpg";
import img7 from "../../Images/IMG_-16.jpg";
import img8 from "../../Images/IMG_-17.jpg";



function Gallery() {
    const [images, setImages] = useState([
        { image: img },
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
        { image: img7 },
        { image: img8 },
    ]);

    return (
        <div className="MainContainer">
            <h1 className="heading">Gallery</h1>
            <section className="Container">
                {
                    images.map((img) => (
                        <div className="image-container">
                            <img src={img.image} className="image" />
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default Gallery;