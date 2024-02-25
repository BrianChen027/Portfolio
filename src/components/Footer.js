import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Po_LOGO.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pochunchen/"><img src={navIcon1} alt="In for LinkedIn" /></a>
              <a href="https://www.linkedin.com/in/pochunchen/"><img src={navIcon2} alt="In for FB" /></a>
              <a href="https://www.linkedin.com/in/pochunchen/"><img src={navIcon3} alt="In for IG" /></a>
            </div>
            <p>Copyright ©2024 Po-Chun Chen. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
