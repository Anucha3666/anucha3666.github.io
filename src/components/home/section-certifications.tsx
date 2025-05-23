"use client";

import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Tabs } from "../ui/tabs";

export const SectionCertifications = () => {
  const content = [
    {
      title: "Embedded System and IoT",
      description:
        "17 May 2025 | สถาปัตยกรรมของไมโครโปรเซสเซอร์ไมโครคอนโทรลเลอร์ ชุดคำสั่ง บอร์ดไมโครคอนโทรลเลอร์ การเขียนโปรแกรมควบคุม การเชื่อมต่ออุปกรณ์อินพุต เอาต์พุต การแปลงสัญญาณระหว่างสัญญาณดิจิทัลกับสัญญาณแอนะล็อก การประยุกต์สั่งงานอุปกรณ์อินพุต เอาต์พุตลักษณะต่าง ๆ เซนเซอร์และการประยุกต์ แนวทางการพัฒนาโครงงานระบบอัตโนมัติ การสั่งงานและควบคุมผ่านเครือข่ายอินเตอร์เน็ต",
      content: (
        <Image
          src='/images/certifications/kmitl/embedded-system-and-iot.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      ),
    },
    {
      title: "Fundamental of Computer Programming with Python Language",
      description:
        "2 กันยายน 2021 | ความรู้เบื้องต้นเกี่ยวกับภาษา Python เครื่องมือการพัฒนา การเขียนโปรแกรมด้วยคำสั่งควบคุมเบื้องต้น การสร้างฟังก์ชันเบื้องต้น ชนิดข้อมูลเฉพาะของภาษาการอ่านและเขียนไฟล์",
      content: (
        <Image
          src='/images/certifications/thaimooc/fundamental-of-computer-rogramming-with-python-language.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      ),
    },
    {
      title: "3D Modeling using BIM Technology",
      description:
        "21 สิงหาคม 2021 | 3D MODELING ขอต้อนรับเข้าสู่รายวิชาการขึ้นรูปโมเดลสามมิติ ด้วยเทคโนโลยีแบบจำลองสารสนเทศอาคาร โดยเนื้อหารายวิชา แบ่งออกเป็น 5 บทด้วยกัน บทที่ 1 ทำความรู้จัก BIM บทที่ 2 การใช้งานโปรแกรม ArchiCAD บทที่ 3 การสร้างโมเดลอาคารเสมือนจริง บทที่ 4 การสร้างแบบก่อสร้างและประมาณราคา บทที่ 5 การสร้างภาพเคลื่อนไหว Animation โดยเมื่อผู้เรียน เรียนวิชานี้จบก็จะสามารถ ใช้โปรแกรม ArchiCAD สร้าง โมเดลอาคารสามมิติ รวมถึง สร้างแบบก่อสร้าง แปลนรูปด้านรูปตัด สามารถที่จะใช้ความรู้นี้ ผลิตแบบก่อสร้างเพื่อยื่นขออนุญาตก่อสร้างได้เลย",
      content: (
        <Image
          src='/images/certifications/thaimooc/3d-modeling-using-bim-technology.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      ),
    },
    {
      title: "Calculus for Engineer",
      description:
        "13 สิงหาคม 2021 | ลิมิตและความต่อเนื่องของฟังก์ชัน การหาอนุพันธ์ บทประยุกต์ของอนุพันธ์",
      content: (
        <Image
          src='/images/certifications/thaimooc/calculus-for-engineer.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      ),
    },
    {
      title: "Basic Engineering Skill",
      description:
        "13 สิงหาคม 2021 | ความรู้เบื้องต้นเกี่ยวกับทักษะงานช่างพื้นฐาน ความปลอดภัยเบื้องต้นในการปฏิบัติงาน การสร้างนิสัยอุตสาหกรรมในการปฏิบัติงาน วัสดุช่างอุตสาหกรรม งานเขียนแบบเทคนิค รวมทั้งความรู้พื้นฐานในงานช่างเฉพาะทางเบื้องต้น เช่น ช่างไฟฟ้า ช่างเมคคาทรอนิกส์ ช่างระบบสื่อสารใยแก้วนำแสง และช่างอิเล็กทรอนิกส์ เป็นต้น ",
      content: (
        <Image
          src='/images/certifications/thaimooc/basic-engineering-skill.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      ),
    },
  ];

  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className=' w-full h-full justify-center items-center overflow-auto shadow-2xl'>
          <StickyScroll content={content} />
        </div>
      ),
    },
    {
      title: "TEST",
      value: "product2",
      content: (
        <div className=' w-full h-full justify-center items-center overflow-auto shadow-2xl'>
          <StickyScroll content={content} />
        </div>
      ),
    },
  ];

  return (
    <section
      id='certifications'
      className='flex flex-col w-full gap-10 overflow-hidden justify-center items-center px-4 md:px-6 pt-[5rem]'
      style={{ height: "calc(100dvh)" }}>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <p className=' text-4xl font-bold'>Certifications</p>
        <p className=' w-full text-center'>
          {
            "My professional journey in the tech industry, showcasing my roles and responsibilities."
          }
        </p>
      </div>
      <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start'>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};
