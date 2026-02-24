import Navbar from "../component/Navbar";
import Card from "react-bootstrap/Card";
import "./Stylebody.css";
function Contact() {
  return (
    <>
      <Navbar />

      <div className="about-me">
        <Card className="mb-5">
          <Card.Header>
            <h4>Contact</h4>
          </Card.Header>
          <Card.Body>
            <blockquote
              className="blockquote mb-0"
              style={{ fontSize: "clamp(15px, 3vw, 20px)" }}
            >
              <p>สุธิดา ขำขุน (เบส)</p>

              <footer className="blockquote-footer">
                Email: sutidakhamkhun@gmail.com
              </footer>
              <footer className="blockquote-footer">
                Github:
                <a
                  href="https://github.com/Copper-Code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary fw-bold text-decoration-none hover-link"
                >
                  <i className="bi bi-github me-1"></i> Copper-Code
                </a>
              </footer>
              <footer className="blockquote-footer">Phone: 062-156-0695</footer>
              <footer className="blockquote-footer">
                ที่อยู่ 1 : 298/3 หมู่ที่ 5 ต.สันผักหวาน อ.หางดง
                จ.เชียงใหม่{" "}
              </footer>
              <footer className="blockquote-footer">
                ที่อยู่ 2 : 2/3 ซอยเพชรบุรี 47 เขตห้วยขวาง กรุงเทพฯ
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Contact;
