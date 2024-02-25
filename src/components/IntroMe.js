import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/myback_Img1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Software Engineer", "Software Developer", "New Grad"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [tick, delta]);

  return (
    <section className="banner" id="intro">
      <Container>
        <Row className="align-items-center">
        {/* Image -> left */}
        <Col xs={12} md={6} xl={5}>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInLeft animate__slower" : ""}>
                <img src={headerImg} alt="Header Img"/>
            </div>}
        </TrackVisibility>
          </Col>
           {/* content -> right */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Software Developer", "New Grad from CMU" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a master of Electrical and Computer Engineering at Carnegie Mellon University. I have experience in writing applications with Java and other programming languages. This is also my interest which is creating useful applications or tools to benefit me or people's daily lives. Recently, looking for a Full Time Software Engineer opportunity. I have some projects that can prove I do have experience in developing projects in the software field, which you can find on my resume or below. Also, I have participated in several courses which are related to the software development field. If you have any questions or want to know more information about me, please contact me.</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
