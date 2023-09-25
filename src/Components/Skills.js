import gigi from "../Assets/img/gigi.svg";
import langit from "../Assets/img/langit.svg";
import kucing from "../Assets/img/kucing.svg";
import pantai from "../Assets/img/pantai.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../Assets/img/arrow1.svg";
import arrow2 from "../Assets/img/arrow2.svg";
import colorSharp from "../Assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About You</h2>
              <p>tentang bila dan dunianya</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={gigi} alt="Image" />
                  <h5>gigi</h5>
                </div>
                <div className="item">
                  <img src={langit} alt="Image" />
                  <h5>langit</h5>
                </div>
                <div className="item">
                  <img src={kucing} alt="Image" />
                  <h5>kucing</h5>
                </div>
                <div className="item">
                  <img src={pantai} alt="Image" />
                  <h5>pantai</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
