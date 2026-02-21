import Navbar from "../component/Navbar";
import Head from "../component/Head";
import "./Stylebody.css";
import ProjectCard from "../component/ProjectCard";
import { SkilCard } from "../component/SkilCard";
import data from "../data/project.json";
import Stack from "react-bootstrap/Stack";

function Home() {
  const projectElements = data.projects.map((item) => {
    return <ProjectCard key={item.id} propsItem={item} />;
  });
  // CharacterClick={onCharacterClick}

  return (
    <>
      <Navbar />
      <Head />
      <Stack gap={3}>
        <section className="p-2 m-4">
          <h2 className="text-center fw-bold mb-4">About</h2>
          <p
            className="text-center"
            style={{ fontWeight: "bolder", fontSize: "clamp(10px, 3vw, 18px)" }}
          >
            "สวัสดีค่ะ ชื่อนางสาวสุธิดา ขำขุน (เบส) สำเร็จการศึกษาระดับปริญญาตรี
            วิชาเอกวิทยาการคอมพิวเตอร์ (เว็บและโมบายเทคโนโลยี)
            จากมหาวิทยาลัยสุโขทัยธรรมาธิราช
            มีประสบการณ์การทำงานด้านพัสดุโรงพยาบาลภาครัฐ (จัดซื้อจัดจ้างผ่านระบบ
            E-GP / ดูแลทะเบียนครุภัณฑ์), ดูแลเพจอสังหาริมทรัพย์,
            งานบริการร้านกาแฟและแคชเชียร์ (ใช้ระบบ Gpos, Line และ Grab
            ในการจัดการงานหน้าร้าน ทำสื่อประชาสัมพันธ์) ปัจจุบันสนใจงานด้าน IT
            และพัฒนา Web Application
            เพื่อออกแบบและพัฒนาระบบที่ตอบโจทย์การใช้งานของผู้ใช้ (User)"
          </p>
        </section>

        <section>
          <h2 className="text-center fw-bold mb-4">Skill</h2>
          <SkilCard />
        </section>

        <section>
          <h2 className="text-center fw-bold mb-4">Projects</h2>
          <div className="app-body">{projectElements}</div>
        </section>
      </Stack>
    </>
  );
}

export default Home;
