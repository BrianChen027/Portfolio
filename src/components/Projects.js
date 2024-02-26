import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project_Uber3.jpg";
import projImg1_2 from "../assets/img/Project_Uber6.jpg";
import projImg2 from "../assets/img/Project_SQLandNOSQL2.jpg";
import projImg2_2 from "../assets/img/Project_SQLandNOSQL.jpg";
import projImg3 from "../assets/img/Project_ASG.jpg";
import projImg3_2 from "../assets/img/Project_ASG2.jpg";

import projImg4 from "../assets/img/CacheLab1.jpg";
import projImg4_2 from "../assets/img/CacheLab2.jpg";
import projImg5 from "../assets/img/MallocLab1.jpg";
import projImg5_2 from "../assets/img/MallocLab2.jpg";
import projImg6 from "../assets/img/ProxyLab1.jpg";
import projImg6_2 from "../assets/img/ProxyLab2.jpg";

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
      title: "What is Cache",
      description: "Efficient Cache Simulation and Optimization",
      imgUrl: projImg4,
      imgUrl_bg: projImg4_2,
      intro_1: "Advanced Cache Simulation: Developed a cache simulator in C, simulating the behavior of cache memory with variable sizes and associativities, achieving a 95% accuracy rate in predicting cache hits, misses, and evictions compared to a reference simulator.",
      intro_2: "Optimization Techniques: Enhanced a matrix transpose function, reducing cache misses by over 30% and improving execution speed by 25% through careful analysis and optimization of memory access patterns.",
      intro_3: "Problem-Solving and Debugging Skills: Utilized Valgrind and custom test cases to identify and fix memory errors and inefficiencies in the simulator, leading to a robust solution that supports diverse cache configurations without crashing or memory leaks.",
      intro_skills: "Skills: C(programming language), Cache Simulation, Memory Hierarchy Optimization, Analytical Skills, Performance Analysis",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Dynamic Malloc",
      description: "Dynamic Memory Allocator Design and Optimization",
      imgUrl: projImg5,
      imgUrl_bg: projImg5_2,
      intro_1: "Efficient Memory Management: Enhanced memory utilization by at least 20% through the implementation of an optimized dynamic memory allocator, reducing fragmentation and ensuring efficient execution of memory allocation and deallocation operations.",
      intro_2: "Optimized Execution Speed: Achieved at least a 15% faster processing speed compared to the system's default allocator by fine-tuning and optimizing the memory allocation algorithm, enhancing overall program efficiency.",
      intro_3: "Memory Allocator Design and Implementation: Independently designed and implemented a complete memory allocator supporting malloc, free, realloc, and calloc operations, validated through simulation testing to ensure over 99% accuracy and stability.",
      intro_skills: "Skills: C(programming language), Deep Understanding of Computer Memory Management, Application of Data Structures and Algorithms, Performance Optimization",
      intro_5: "",
      githubUrl: "",
    },
    {
      title: "Web Proxy",
      description: "High-Performance Caching Web Proxy Implementation",
      imgUrl: projImg6,
      imgUrl_bg: projImg6_2,
      intro_1: "Concurrency Handling: Implemented multitasking concurrency using POSIX threads, enhancing the web proxy's capability to simultaneously manage over 100 client connections.",
      intro_2: "Cache Mechanism Design and Implementation: Developed an efficient caching system with a Least Recently Used (LRU) policy, achieving at least a 30% reduction in response time, significantly improving web content access speed and user experience.",
      intro_3: "Network Programming and Thread Safety: Mastered key skills in network programming and implemented thread-safe cache access, ensuring data consistency and integrity under high concurrency conditions.",
      intro_skills: "Skills: C(programming language), Network Programming, Concurrency Management, Caching Mechanisms, Security and Error Handling, Performance Optimization",
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
                      <Nav.Link eventKey="second">Computer System</Nav.Link>
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
                      <p>Advanced Systems Programming: Memory Management, Caching, and Networking</p>
                      <p>This series of projects—CacheLab, MallocLab, and ProxyLab—offers hands-on experience in systems programming, focusing on dynamic memory allocation, cache efficiency, and networked application development. Students gain practical skills in C programming, performance optimization, and concurrent systems design, preparing them for complex challenges in computing systems.</p>
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
