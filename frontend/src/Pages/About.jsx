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
              <p style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>2562-2564</p>
              <footer className="blockquote-footer" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                วิทยาลัยอาชีวศึกษานครสวรรค์
              </footer>
              <footer className="blockquote-footer" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                ปวส. สาขาคอมพิวเตอร์ธุรกิจ
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>2564-2568</p>
              <footer className="blockquote-footer" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                มหาวิทยาลัยสุโขทัยธรรมาธิราช
              </footer>
              <footer className="blockquote-footer" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
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
              <p style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>กุมภาพันธ์ 2565 - กันยายน 2566</p>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>
                โรงพยาบาลสวรรค์ประชารักษ์
              </footer>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>
                ตำแหน่ง : เจ้าพนักงานพัสดุ
              </footer>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>
                หน้าที่ : 
                <div className="ms-5" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                  <lu>
                   <li>จัดทำบันทึกขอซื้อขอจ้างผ่านระบบ E-GP</li>
                  <li>ดำเนินการเบิก–จ่าย ควบคุมการยืม–คืนวัสดุและครุภัณฑ์</li>
                  <li>สำรวจ ตรวจสอบ และจัดทำทะเบียนคุมครุภัณฑ์</li>
                  <li>ประสานงานแจ้งซ่อมบำรุงและติดตามสถานะ</li>
                  <li>จัดเก็บและดูแลเอกสารใบสำคัญทางราชการ</li>
                  <li>ติดต่อประสานงานกับหน่วยงานภายในและภายนอกที่เกี่ยวข้อง</li>
                   </lu>
                   </div>
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>พฤศจิกายน 2566 - มิถุนายน 2568</p>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>ฟรีแลนซ์-แอดมินเพจอสังหาริมทรัพย์</footer>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>
                หน้าที่ :
                <div className="ms-5" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                  <lu>
                    <li>ดูแลและจัดการเพจพร้อมลงโพสต์ Facebook และ Marketplace </li>
                    <li>ให้ข้อมูลและตอบคำถามลูกค้า</li>
                    <li>ประสานงานลูกค้ากับทีม</li>
                  </lu>
                </div>
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>มิถุนายน 2568-ธันวาคม 2568</p>
              <footer className="blockquote-footer" style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>Succeed Cafe</footer>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>ตำแหน่ง : แคชเชียร์</footer>
              <footer className="blockquote-footer"  style={{ fontSize: "clamp(15px, 3vw, 20px)" }}>
                หน้าที่ :
                <div className="ms-5" style={{ fontSize: "clamp(14px, 3vw, 18px)" }}>
                  <lu>
                    <li>ให้บริการลูกค้า รับออร์เดอร์ รับชำระเงิน</li>
                    <li>ดูแลความเรียบร้อยภายในร้าน</li>
                    <li>จัดเตรียมอุปกรณ์และสนับสนุนการดำเนินงานหน้าร้าน</li>
                    <li>เพิ่มข้อมูลสินค้าในระบบหลังบ้าน (POS) , Grab Merchant</li>
                    <li>ดูแลเพจ Facebook / Line พร้อมจัดทำสื่อประชาสัมพันธ์</li>
                  </lu>
                </div>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default About;
