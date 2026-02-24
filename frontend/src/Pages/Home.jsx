import Navbar from "../component/Navbar";
import Head from "../component/Head";
import "./Stylebody.css";
import ProjectCard from "../component/ProjectCard";
import { SkilCard } from "../component/SkilCard";
import data from "../data/project.json";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Home() {
  const projectElements = data.projects.map((item) => {
    return <ProjectCard key={item.id} propsItem={item} />;
  });
  // CharacterClick={onCharacterClick}

  return (
    <>
      <Navbar />
      <Head />
      <Stack gap={4}>
        <section className="p-2 m-4">
          <Container className="container-background">
            <Row>
              <Col sm={4}>
                <h5 className="fw-bold mb-4">About</h5>
                <div
                  style={{
                    fontSize: "clamp(10px, 3vw, 17px)",
                    paddingLeft: "10px",
                  }}
                >
                  <p>นางสาวสุธิดา ขำขุน (เบส) </p>
                  <p>3 ธันวาคม 2543 </p>
                  <p>เพศ : หญิง</p>
                  <p>ที่อยู่ 1 : 298/3 หมู่ที่ 5 ต.สันผักหวาน อ.หางดง จ.เชียงใหม่</p>{" "}
                  <p>ที่อยู่ 2 : 2/3 ซอยเพชรบุรี 47 เขตห้วยขวาง กรุงเทพฯ</p>
                  <p>เบอร์โทร : 062-156-0695</p>{" "}
                </div>
              </Col>
              <Col sm={8}>
                <section>
                  <h5 className="fw-bold mb-4">Education</h5>
                  <div
                    style={{
                      fontSize: "clamp(10px, 3vw, 17px)",
                      paddingLeft: "10px",
                    }}
                  >
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        2562-2564 ปวส.{" "}
                      </span>{" "}
                      สาขาคอมพิวเตอร์ธุรกิจ วิทยาลัยอาชีวศึกษานครสวรรค์{" "}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        2564-2568 ปริญญาตรี{" "}
                      </span>
                      วิชาเอกวิทยาการคอมพิวเตอร์ วิชาเฉพาะ เว็บและโมบายเทคโนโลยี
                      มหาวิทยาลัยสุโขทัยธรรมาธิราช{" "}
                    </p>
                  </div>
                </section>
                <Link to="/about">
                <Button className="me-2" variant="primary">ประสบการณ์</Button></Link>
                
                <Button 
                variant="dark"
                href="https://github.com/Copper-Code"
                target="_blank"
                rel="noopener noreferrer"
                >Github</Button>
           



     
              </Col>
            </Row>
          </Container>

        
        </section>

        <section>
          <h2 className="text-center fw-bold mb-4">Skill</h2>
          <SkilCard />
        </section>

        <section>
          <h2 className="text-center fw-bold mt-5 mb-5">Projects</h2>
          <div className="app-body">{projectElements}</div>
        </section>
      </Stack>
    </>
  );
}

export default Home;
