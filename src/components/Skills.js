import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
                        <p>Skills that I have obtained to become a software engineer.<br></br> Including Programming Language, Application Software, Programming Tool.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <FontAwesomeIcon icon={faJava} size="8x"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faPython} size="8x" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faJs} size="8x" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faReact} size="8x"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faNodeJs} size="8x"/>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faAws} size="8x"/>
                                <h5>AWS deployment</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faGoogle} size="8x"/>
                                <h5>GCP deployment</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faCss3Alt} size="8x"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faHtml5} size="8x"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faDocker} size="8x"/>
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faGooglePlay} size="8x"/>
                                <h5>Android App Develop</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Img for background" />
    </section>
  )
}
