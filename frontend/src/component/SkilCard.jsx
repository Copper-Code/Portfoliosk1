import "./Card.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
export const SkilCard = () => {
  return (
    <Container>
      {/* <Row className="justify-content-center g-4"> */}
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="CardSkill">
            <Card.Header className=" text-center fw-bold fs-4 bg-white">
              Frontend
            </Card.Header>
            <Card.Body>
              {/* <Card.Title className="text-center fw-bold mb-3 fs-4">Frontend</Card.Title> */}
              {/* <Card.Text>Javascript, Html, Css, Bootstrap</Card.Text> */}
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/img_javascript.jpg"
                  alt="Image"
                />
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/html.png"
                  alt="Image"
                />
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/css.png"
                  alt="Image"
                />
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/bootstrap.png"
                  alt="Image"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {/* <Card style={{ width: "18rem", marginTop: "20px" }}> */}
          <Card className="CardSkill">
            <Card.Header className="text-center fw-bold fs-4 bg-white">
              Backend
            </Card.Header>
            <Card.Body>
              {/* <Card.Title className="text-center fw-bold mb-3  fs-4">Backend</Card.Title> */}
              {/* <Card.Text>NodeJs, Express, Postman</Card.Text> */}
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/nodejs.png"
                  alt="Image"
                />
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/Expressjs.png"
                  alt="Image"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {/* <Card style={{ width: "18rem", margin: "20px" }}> */}
          <Card className="CardSkill">
            <Card.Header className="text-center fw-bold fs-4  bg-white">
              Database
            </Card.Header>

            <Card.Body>
              {/* <Card.Title className="text-center fw-bold mb-3  fs-4">Database</Card.Title> */}
              {/* <Card.Text>MySql</Card.Text> */}
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/mysql.png"
                  alt="Image"
                />
                <Card.Img
                  className="imageskill"
                  variant="top"
                  src="/MongoDB.png"
                  alt="Image"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {/* <Card style={{ width: "18rem" }}> */}
          <Card className="CardSkill">
            <Card.Header className="text-center fw-bold fs-4 bg-white ">
              Other
            </Card.Header>
            <Card.Body>
              {/* <Card.Title className="text-center fw-bold mb-3  fs-4">Other</Card.Title> */}
              <Card.Text>
                <Badge
                  bg="warning"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Postman
                </Badge>
                <Badge
                  bg="dark"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Github
                </Badge>
                <Badge
                  bg="primary"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  VS Code
                </Badge>
                <Badge
                  bg="danger"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Anydesk
                </Badge>
                <Badge
                  bg="secondary"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Capcut
                </Badge>
                <Badge
                  bg="info"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Canva
                </Badge>
                <Badge
                  bg="primary"
                  className="me-2 mb-2"
                  style={{ fontSize: "16px" }}
                >
                  Microsoft Office
                </Badge>

                <Badge
                  bg="dark"
                  className="me-2 mb-2"
                  style={{ fontSize: "14px" }}
                >
                  ลง Windows และติดตั้งโปรแกรม
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
