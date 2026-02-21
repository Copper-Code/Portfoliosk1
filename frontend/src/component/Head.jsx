import "./Head.css";
import Button from "react-bootstrap/Button";
function Head() {
  return (
    <div className="header">
      <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
        <div className="flex-shrink-0 order-md-2">
          <img src="/Copper.jpg" alt="Copper" className="profile" />
        </div>
        <div className="flex-grow-1 ms-3">
          {/* <div className='p-2 flex-fill'> */}
          <h1 className="namefont">
            Hi I'm <span className="nickname">BASS</span>
          </h1>
          <h1>Sutida Khamkhun</h1>
          <p>
            สนใจพัฒนาตนเองในสายงาน IT และ Full Stack Developer
            โดยปัจจุบันมุ่งเน้นการพัฒนา Frontend ด้วย React, JavaScript, HTML,
            CSS และ Bootstrap พร้อมต่อยอดทักษะด้าน Backend และ Database
            เพื่อสร้างระบบที่สามารถใช้งานได้จริง
          </p>
          <Button
            className="resume"
            variant="primary"
            href="/resume_sutida.pdf"
            target="_blank"
          >
            Resume Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Head;
