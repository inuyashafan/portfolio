import analysticon from "../assets/img/analysticon.jpg";
import webdevicon from "../assets/img/webdevicon.jpg";
import adapticon from "../assets/img/adapticon.jpg";
import webdesgicon from "../assets/img/webdesgicon.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.jpg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am skilled in a variety of languages, tools and frameworks such as Python, SQL, R, JavaScript, HTML, CSS, VSCode, Git, elephantsql, React, and Flask.<br></br> Beyond any language or framework I also have the important soft skills to thrive in any environment. I'm diligent, adaptable, a team player, creative, and I can learn quickly.  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={analysticon} alt="Image" />
                                <h5>Data Analytics</h5>
                            </div>
                            <div className="item">
                                <img src={webdevicon} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={adapticon} alt="Image" />
                                <h5>Adaptability</h5>
                            </div>
                            <div className="item">
                                <img src={webdesgicon} alt="Image" />
                                <h5>Web Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}