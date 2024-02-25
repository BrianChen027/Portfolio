// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import headerImg from "../assets/img/header-img.svg";
// import headerImg from "../assets/img/BrianImage.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Software Engineer", "Software Developer", "New Grad from CMU" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hello! I'm Brian`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Software Developer", "New Grad from CMU" ]'><span className="wrap">{text}</span></span></h1>
//                   <p>I am a master of Electrical and Computer Engineering at Carnegie Mellon University. I have experience in writing applications with Java and other programming languages. This is also my interest which is creating useful applications or tools to benefit me or people's daily lives. Recently, looking for a summer internship as a Software Development Engineer. I have some projects that can prove I do have experience in developing projects in the software field, which you can find on my resume. Also, I have participated in several courses which are related to the software development field. If you have any questions or want to know more information about me, please contact me.</p>
//                   <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 // <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                 //   <img src={headerImg} alt="Header Img"/>
//                 // </div>
//                 <div>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>
//               }
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/BrianImage.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // 移除未使用的 index 状态
  // const toRotate = ["Software Engineer", "Software Developer", "New Grad from CMU"];
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Software Engineer", "Software Developer", "New Grad from CMU"]; // 移动到这里
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

  const handleConnectClick = () => {
    window.location.hash = 'connect';
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hello! I'm Brian`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Software Developer", "New Grad from CMU" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a master of Electrical and Computer Engineering at Carnegie Mellon University. To me, becoming a qualified software engineer is a long but interesting journey. Sometimes, when the software I develop is able to help others, it reminds me of the original intention of choosing this path.</p>
                  <p>"Learning is easier than determining what you want to pursue." but I know what I really want.</p>
                  <button onClick={handleConnectClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
                
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
