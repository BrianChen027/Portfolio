import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project_Uber3.jpg";
import projImg1_2 from "../assets/img/Project_Uber6.jpg";
import projImg2 from "../assets/img/Project_SQLandNOSQL2.jpg";
import projImg2_2 from "../assets/img/Project_SQLandNOSQL.jpg";
import projImg3 from "../assets/img/Project_ASG.jpg";
import projImg3_2 from "../assets/img/Project_ASG2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Kafka and Samza Service",
      description: "Real-time Stream Processing and Analysis",
      imgUrl: projImg1,
      imgUrl_bg: projImg1_2,
      intro_1: "The main goal of this project is to gain a deep understanding and hands-on experience in real-time data stream processing and analysis using Kafka and Samza. ",
      intro_2: "I employed Kafka for handling large-scale data streams as a message queuing system, and Samza for processing and analyzing these streams. This combination allowed me to design efficient, scalable real-time data processing solutions.",
      intro_3: "This project showcases my technical depth and breadth, including understanding distributed systems, problem-solving in real-time data processing, and application development using advanced big data frameworks. Additionally, it helped me enhance my programming, system design, and project management skills.",
      intro_skills: "Skills: Kafka for data stream management, Samza for stream processing and analysis, Distributed systems design, Java programming and YARN deployment, Problem-solving for real-time data processing",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Cloud-Based Social Network",
      description: "Building a Heterogeneous Storage Solution",
      imgUrl: projImg2,
      imgUrl_bg: projImg2_2,
      intro_1: "In the project 'Cloud-Based Social Network: Building a Heterogeneous Storage Solution', I embarked on creating a social networking platform akin to Facebook. The primary goal was to explore the intricacies of cloud computing through the practical application of building a service that manages complex user interactions and data storage needs efficiently.",
      intro_2: "The project utilized a blend of cutting-edge technologies including Neo4j for graph-based social relationship management, NoSQL and SQL databases for varied data handling requirements, and cloud services like Azure, complemented by Infrastructure as Code (IaC) tools such as Terraform. This combination enabled a robust, scalable solution that leverages the strengths of each technology for specific aspects of the social network’s functionality.",
      intro_3: "Showcasing skills in database management, cloud infrastructure, and software development, this project was a comprehensive exercise in applying theoretical knowledge in a practical setting. It demonstrated my ability to navigate and integrate a range of technologies to create a fully functional, cloud-based application, underscoring my proficiency in solving complex problems in the realm of cloud computing and database management.",
      intro_skills: "Skills: Database Management and Optimization, Cloud Computing, Infrastructure as Code (IaC), Software Development, Performance Tuning, Security and Data Protection",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Elasticity and Scalability Explored",
      description: "Cloud Computing Horizontal and Auto Scaling Group Apply",
      imgUrl: projImg3,
      imgUrl_bg: projImg3_2,
      intro_1: "In this project, I dive into mastering cloud infrastructure's dynamic scaling to meet changing demands, using AWS technologies and Terraform for automation.",
      intro_2: "This project not only enhances my understanding of managing scalable and resilient cloud environments but also showcases my ability to automate cloud resource management, implement strategic monitoring, and analyze performance for optimizing scalability and elasticity.",
      intro_3: "Through this comprehensive engagement, I've demonstrated a blend of technical proficiency and strategic insight, emphasizing my commitment to developing adaptive cloud solutions that are efficient and responsive to real-time needs.",
      intro_skills: "Skills: Technical Proficiency in Cloud Computing, Automation and Orchestration, Strategic Monitoring and Performance Analysis, Problem-Solving and Strategic Planning",
      intro_5: "",
      githubUrl: "",
    },
  ];

  const projects_2 = [
    {
      title: "Kafka and Samza Service",
      description: "Real-time Stream Processing and Analysis",
      imgUrl: projImg1,
      imgUrl_bg: projImg1_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Cloud-Based Social Network",
      description: "Building a Heterogeneous Storage Solution",
      imgUrl: projImg2,
      imgUrl_bg: projImg2_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Elasticity and Scalability Explored",
      description: "Cloud Computing Horizontal and Auto Scaling Group Apply",
      imgUrl: projImg3,
      imgUrl_bg: projImg3_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
  ];

  const projects_3 = [
    {
      title: "Kafka and Samza Service",
      description: "Real-time Stream Processing and Analysis",
      imgUrl: projImg1,
      imgUrl_bg: projImg1_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Cloud-Based Social Network",
      description: "Building a Heterogeneous Storage Solution",
      imgUrl: projImg2,
      imgUrl_bg: projImg2_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Elasticity and Scalability Explored",
      description: "Cloud Computing Horizontal and Auto Scaling Group Apply",
      imgUrl: projImg3,
      imgUrl_bg: projImg3_2,
      intro_1: "",
      intro_2: "",
      intro_3: "",
      intro_skills: "",
      intro_5: "",
      githubUrl: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This portfolio showcases a diverse array of my projects, each categorized to highlight specific skills I've acquired and the outcomes achieved. Through these projects, I demonstrate my ability to apply learned techniques effectively across various domains, presenting tangible results that reflect my growth and proficiency in each category.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cloud Computing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Area Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Area Three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>These three projects cover key technologies and practices in cloud computing, including elasticity, heterogeneous cloud storage, and stream processing, demonstrating how to utilize cloud architecture to solve computational and data storage challenges.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects_2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Img for background"></img>
    </section>
  )
}
