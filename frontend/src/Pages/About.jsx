import Navbar from "../component/Navbar";
import Card from "react-bootstrap/Card";
import "./Stylebody.css";


function About() {
  return (
    <>
      <Navbar />
      <div className="about-me">
        <Card className="mb-5">
          <Card.Header>
            <h4>ประวัติการศึกษา</h4>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>2562-2564</p>
              <footer className="blockquote-footer">
                วิทยาลัยอาชีวศึกษานครสวรรค์
              </footer>
              <footer className="blockquote-footer">
                ปวส. สาขาคอมพิวเตอร์ธุรกิจ
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p>2564-2568</p>
              <footer className="blockquote-footer">
                มหาวิทยาลัยสุโขทัยธรรมาธิราช
              </footer>
              <footer className="blockquote-footer">
                วิชาเอกวิทยาการคอมพิวเตอร์ วิชาเฉพาะ เว็บและโมบายเทคโนโลยี
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h4>ประสบการณ์การทำงาน</h4>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>กุมภาพันธ์ 2565 - กันยายน 2566</p>
              <footer className="blockquote-footer">
                โรงพยาบาลสวรรค์ประชารักษ์
              </footer>
              <footer className="blockquote-footer">
                ตำแหน่ง : เจ้าพนักงานพัสดุ
              </footer>
              <footer className="blockquote-footer">
                หน้าที่ : ทำบันทึกขอซื้อขอจ้าง E-GP เบิก จ่าย ยืม,
                คืนวัสดุ-ครุภัณฑ์, สำรวจ-ทำทะเบียนครุภัณฑ์, แจ้งซ่อมบำรุง,
                จัดเก็บเอกสารใบสำคัญ, ติดต่อประสานงาน
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p>พฤศจิกายน 2566 - มิถุนายน 2568</p>
              <footer className="blockquote-footer">ฟรีแลนซ์-แอดมินเพจอสังหาริมทรัพย์</footer>
              <footer className="blockquote-footer">
                  ดูแลหน้าเพจ Facebook,
                  นำเสนอให้ข้อมูลตอบคำถามลูกค้า,
                  ลงโพสต์ Facebook , Marketplace,
                  ติดต่อประสานงานลูกค้ากับทีม
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p>มิถุนายน 2568-ธันวาคม 2568</p>
              <footer className="blockquote-footer">Succeed Cafe</footer>
              <footer className="blockquote-footer">ตำแหน่ง : แคชเชียร์</footer>
              <footer className="blockquote-footer">
                หน้าที่ : บริการลูกค้า (รับออร์เดอร์/รับชำระเงิน/เสิร์ฟ),
                ดูแลความสะอาดเรียบร้อย, เตรียมอุปกรณ์, เพิ่มข้อมูลสินค้าลงระบบหลังบ้าน
                Gpos ดูแลเพจ Facebook, Line ทำสื่อประชาสัมพันธ์ (ป้าย,โบรชัวร์)
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default About;
