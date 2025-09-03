import { ImageCertification } from "./image";
import { ListDescription } from "./list";
import { TStickyScrollCertificationProps } from "./sticky-scroll-reveal-certification";

export const DATA_CERTIFICATIONS: TStickyScrollCertificationProps["content"] = [
  {
    title:
      "ใบประกาศนียบัตรมาตรฐานฝีมือแรงงานแห่งชาติ สาขาช่างเดินสายไฟฟ้าในอาคาร",
    tags: ["licenses"],
    date_issue: "07/04/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ได้ผ่านการทดสอบมาตรฐานฝีมือแรงงานแห่งชาติ
          ตามพระราชบัญญัติส่งเสริมการพัฒนาฝีมือแรงงาน พ.ศ. 2545
          ในสาขาอาชีพช่างไฟฟ้าไฟฟ้า อิเล็กทรอนิกส์และคอมพิวเตอร์
          สาขาช่างไฟฟ้าภายในอาคาร ระดับที่ 1 จากกรมพัฒนาฝีมือแรงงาน
          โดยสำนักงานพัฒนาฝีมือแรงงานอุตรดิตถ์
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การได้รับใบประกาศนียบัตรนี้แสดงถึงความสามารถในการปฏิบัติงานด้านระบบไฟฟ้าภายในอาคาร
          ทั้งการอ่านแบบวงจร การติดตั้งอุปกรณ์ไฟฟ้า การเดินสายไฟ
          และการบำรุงรักษาระบบไฟฟ้า ตามมาตรฐานความปลอดภัยและข้อกำหนดทางเทคนิค
          ซึ่งเป็นพื้นฐานสำคัญในการประกอบอาชีพช่างไฟฟ้า
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756869904/Electrician_in_the_building_lcjoqx.png"
        }
      />
    ),
  },
  {
    title: "ใบรับรองการอบรมหลักสูตรยกระดับฝีมือ สาขาช่างเดินสายไฟฟ้าในอาคาร",
    tags: ["training_course"],
    date_issue: "12/03/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ได้เข้ารับการอบรมหลักสูตรยกระดับฝีมือ สาขาช่างเดินสายไฟฟ้าในอาคาร
          จำนวน 30 ชั่วโมง จัดโดยกรมพัฒนาฝีมือแรงงาน กระทรวงแรงงาน ระหว่างวันที่
          26 กุมภาพันธ์ - 7 มีนาคม พ.ศ. 2564
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          หลักสูตรนี้เป็นการพัฒนาทักษะและความรู้เพิ่มเติมด้านการเดินสายไฟฟ้าภายในอาคาร
          ครอบคลุมเทคนิคใหม่ๆ มาตรฐานความปลอดภัย และการใช้เครื่องมือสมัยใหม่
          เพื่อเตรียมความพร้อมก่อนเข้าสอบมาตรฐานฝีมือแรงงานแห่งชาติ
          และเพิ่มประสิทธิภาพในการปฏิบัติงานจริง
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756869903/Certificate_of_training_in_skill_enhancement_course_in_the_field_of_building_electrical_wiring_htc4rp.png"
        }
      />
    ),
  },
  {
    title: "ใบรับรองผ่านการทดสอบภาษาจีนกลาง HSK จากมหาวิทยาลัยเชียงใหม่",
    tags: ["language", "training_course"],
    date_issue: "21/02/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ได้เข้าร่วมการอบรมในโครงการอบรมภาษาจีนเพื่อพิชิต HSK สำหรับนักเรียน
          คณะ และบุคลากรสังกัด สอศ. ระหว่างวันที่ 20-21 กุมภาพันธ์ 2564
          โดยสถาบันขงจื่อ มหาวิทยาลัยเชียงใหม่
          ร่วมกับสำนักงานคณะกรรมการการอาชีวศึกษา
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          โครงการนี้เป็นส่วนหนึ่งของ{" "}
          {`"มหาวิทยาลัยขงจื่อ สถาบันขงจื่อ
          มหาวิทยาลัยเชียงใหม่ ที่ 2 ไทย-จีน วิชาชีพศึกษาแลกเปลี่ยนจีน HSK
          การฝึกอบรม"`}{" "}
          ซึ่งมุ่งเน้นการพัฒนาทักษะภาษาจีนกลาง
          เพื่อเตรียมความพร้อมสู่ตลาดแรงงานในยุคดิจิทัล
          และเสริมสร้างความสัมพันธ์ไทย-จีน
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756869915/Certificate_of_passing_the_HSK_Chinese_Language_Test_from_Chiang_Mai_University_gkdgoy.png"
        }
      />
    ),
  },
  {
    title: "ใบประกาศนียบัตรการทดสอบความรู้พื้นฐานเกี่ยวกับประเทศจีน",
    tags: ["language", "training_course"],
    date_issue: "04/03/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ได้เข้าร่วมการทดสอบออนไลน์ {`"ความรู้พื้นฐานเกี่ยวกับประเทศจีน"`}
          ของโรงเรียนบ้านใหม่ปางคำ(กุสีกาญจนสรณ์)
          ขององค์การบริหารส่วนตำบลน้ำไผ่เพื่อแสดงความดีดังกล่าว
          ผ่านการทดสอบด้วยคะแนน 100% ออกให้ ณ วันที่ 4 มีนาคม 2564
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การทดสอบครั้งนี้ครอบคลุมความรู้พื้นฐานเกี่ยวกับประวัติศาสตร์ วัฒนธรรม
          ภูมิศาสตร์ และข้อมูลทั่วไปเกี่ยวกับประเทศจีน
          ซึ่งเป็นส่วนหนึ่งของการเตรียมความพร้อม ด้านความรู้ภาษาและวัฒนธรรมจีน
          เพื่อสนับสนุนการเรียนรู้ภาษาจีนกลางอย่างครบถ้วน
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756869910/Certificate_of_Basic_Knowledge_Test_on_China_m7vy1z.png"
        }
      />
    ),
  },
  {
    title:
      "ผู้เข้าแข่งขันทักษะวิชาชีพสาขาเมคคาทรอนิกส์และหุ่นยนต์ ระดับภาคเหนือ",
    tags: ["tech", "competition_award"],
    date_issue: "19/03/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้เข้าแข่งขันทักษะวิชาชีพสาขาเมคคาทรอนิกส์และหุ่นยนต์
          ในงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.)
          การแข่งขันทักษะวิชาชีพ และทักษะพื้นฐาน ระดับภาคเหนือ ครั้งที่ 32
          ประจำปีการศึกษา 2563 จัดขึ้นระหว่างวันที่ 17-21 มีนาคม พ.ศ. 2564 ณ
          จังหวัดลำปาง
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การแข่งขันครั้งนี้มีการทดสอบทักษะหลายด้าน
          โดยเริ่มจากการประกอบชิ้นงานตามแบบที่กำหนดให้
          ให้ประกอบชิ้นงานให้ครบถ้วนและถูกต้อง จากนั้นจึงเขียนโปรแกรมควบคุมด้วย
          PLC ตามโจทย์ที่กำหนด ผมได้นำความรู้จากการเรียนทั้งด้านการประกอบ
          และการเขียนโปรแกรม มาประยุกต์ใช้ในสถานการณ์จริง
          ได้แลกเปลี่ยนประสบการณ์กับผู้เข้าแข่งขันจากสถาบันต่างๆ ทั่วภาคเหนือ
          ซึ่งเป็นประสบการณ์ที่มีค่าและช่วยพัฒนาทักษะด้านเมคคาทรอนิกส์ให้แข็งแกร่งขึ้น
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756869032/Academic_Conference_of_the_Future_Professional_Organization_of_Thailand_FPO_cm4xqm.png"
        }
      />
    ),
  },
  {
    title:
      "ผู้ผ่านการฝึกอบรมหลักสูตรความปลอดภัยในการทำงานเกี่ยวกับไฟฟ้าสำหรับลูกจ้างผู้ปฏิบัติงานกับไฟฟ้า",
    tags: ["safety", "training_course"],
    certificate_no: "คฟ.680193",
    date_issue: "19/08/2025",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับวุฒิบัตรจากการผ่านการอบรมหลักสูตรความปลอดภัยในการทำงานเกี่ยวกับไฟฟ้า
          สำหรับลูกจ้างผู้ปฏิบัติงานกับไฟฟ้า จัดโดยบริษัท บี เซฟ เทรนนิ่ง จำกัด
          (Be Safe Training Company Limited) ในวันที่ 19 สิงหาคม พ.ศ. 2564
          ตามกฎกระทรวงกำหนดมาตรฐานในการบริหาร จัดการ และดำเนินการด้านความปลอดภัย
          อาชีวอนามัย และสภาพแวดล้อมในการทำงานเกี่ยวกับไฟฟ้า
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การอบรมนี้ครอบคลุมความรู้เกี่ยวกับอันตรายจากไฟฟ้า
          มาตรฐานความปลอดภัยในการทำงาน การใช้อุปกรณ์ป้องกันส่วนบุคคล (PPE)
          ขั้นตอนการทำงานที่ปลอดภัย และการปฐมพยาบาลเบื้องต้น
          เมื่อเกิดอุบัติเหตุจากไฟฟ้า
          ซึ่งเป็นความรู้ที่จำเป็นสำหรับผู้ที่ต้องปฏิบัติงานเกี่ยวข้องกับระบบไฟฟ้า
          และช่วยให้ผมสามารถทำงานได้อย่างปลอดภัยตามมาตรฐานที่กฎหมายกำหนด
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756805044/Electrical_Safety_For_electrical_control_operators_dr8hny.png"
        }
      />
    ),
  },
  {
    title:
      "ผู้ผ่านการอบรมการปฐมพยาบาลเบื้องต้นและการช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)",
    tags: ["health", "training_course"],
    date_issue: "22/08/2025",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับหนังสือรับรองจากการผ่านการอบรมการปฐมพยาบาลเบื้องต้นและการช่วยฟื้นคืนชีพขั้นพื้นฐาน
          (CPR) จัดโดยบริษัท ศูนย์อาชีวเวชศาสตร์ตะวันออก จำกัด วันที่ 22 สิงหาคม
          2568 ระยะเวลาอบรม 8 ชั่วโมง
          ซึ่งเป็นหลักสูตรที่สำคัญสำหรับการช่วยชีวิตในสถานการณ์ฉุกเฉิน
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          ในการอบรมนี้ผมได้เรียนรู้ทั้งภาคทฤษฎีและภาคปฏิบัติเกี่ยวกับการประเมินสถานการณ์ฉุกเฉิน
          การปฐมพยาบาลเบื้องต้นสำหรับอาการบาดเจ็บต่างๆ
          เทคนิคการกดหน้าอกและการช่วยหายใจ (CPR) การใช้เครื่อง AED
          และการจัดการสถานการณ์ฉุกเฉินต่างๆ ความรู้และทักษะเหล่านี้
          ช่วยให้ผมมีความพร้อมในการให้ความช่วยเหลือผู้ประสบเหตุได้อย่างถูกต้องและทันท่วงที
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756805022/CPR_f2ouln.png"
        }
      />
    ),
  },
  {
    title:
      "รางวัลชนะเลิศการประกวดประเภทพานตอกใช้ในโครงการไหว้ครูสืบสารวัฒนธรรมไทย",
    tags: ["competition_award"],
    date_issue: "08/08/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับรางวัลชนะเลิศจากการประกวดประเภทพานตอกใช้
          ในโครงการไหว้ครูสืบสารวัฒนธรรมไทย วันอาทิตย์ที่ 8 สิงหาคม พ.ศ. 2564
          จัดโดยสำนักวิชาวิศวกรรมศาสตร์และนวัตกรรม
          มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก
          ซึ่งเป็นการแข่งขันที่จัดขึ้นในช่วงสถานการณ์โควิด-19
          ทำให้ต้องปรับรูปแบบการแข่งขันโดยใช้การออกแบบ 3D แทนการทำพานจริง
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          ผมเลือกใช้โปรแกรม SolidWorks ในการออกแบบและสร้างโมเดล 3D ของพานไหว้ครู
          โดยต้องคำนึงถึงความงดงามตามประเพณีไทย ความถูกต้องของสัดส่วน
          และรายละเอียดของลวดลาย
          การแข่งขันครั้งนี้ท้าทายในการถ่ายทอดศิลปะไทยผ่านเทคโนโลยีสมัยใหม่
          และเป็นการผสมผสานระหว่างวัฒนธรรมไทยกับทักษะการออกแบบด้วยคอมพิวเตอร์ได้อย่างลงตัว
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756804642/Teacher_s_Day_tray_contest_meb4ml.png"
        }
      />
    ),
  },
  {
    title: "เกียรติบัตรเนื่องในพิธีวันไหว้ครูประจำปีการศึกษา 2564",
    tags: ["other"],
    date_issue: "26/08/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับเกียรติบัตรจากมหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก
          ในการเข้าร่วมกิจกรรมวันไหว้ครูประจำปีการศึกษา 2564 รูปแบบออนไลน์
          เนื่องในพิธีวันไหว้ครูประจำปีการศึกษา 2564
          ซึ่งจัดขึ้นเพื่อแสดงความเคารพ และระลึกถึงพระคุณครูอาจารย์
          แม้จะอยู่ในช่วงสถานการณ์โควิด-19
          แต่มหาวิทยาลัยยังคงรักษาประเพณีอันดีงามนี้ไว้ผ่านรูปแบบออนไลน์
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การเข้าร่วมกิจกรรมครั้งนี้แสดงถึงความตระหนักในคุณค่าของครูอาจารย์
          และการสืบสานประเพณีไทยที่สำคัญ
          แม้ต้องปรับเปลี่ยนรูปแบบให้เหมาะสมกับสถานการณ์
          แต่ก็ยังคงไว้ซึ่งเจตนารมณ์ของการแสดงความกตัญญูกตเวทีต่อผู้ประสิทธิ์ประสาทวิชาความรู้
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756803778/Teachers_Day_2021_zcexlu.png"
        }
      />
    ),
  },
  {
    title:
      "ผู้ผ่านการอบรมโครงการเสริมสร้างทักษะทางด้านภาษาอังกฤษเพื่อเตรียมสอบ TOEIC",
    tags: ["language", "training_course"],
    date_issue: "10/09/2021",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับเกียรติบัตรจากการผ่านการอบรมโครงการเสริมสร้างทักษะทางด้านภาษาอังกฤษเพื่อเตรียมสอบ
          TOEIC (Test of English for International Communication)
          จัดโดยสาขาวิชาวิศวกรรมเมคคาทรอนิกส์และหุ่นยนต์
          สำนักวิชาวิศวกรรมศาสตร์และนวัตกรรม มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก
          ระหว่างวันที่ 17 กรกฎาคม - 1 สิงหาคม 2564
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การอบรมนี้มุ่งเน้นพัฒนาทักษะภาษาอังกฤษทั้ง 4 ด้าน ได้แก่ การฟัง พูด
          อ่าน และเขียน เพื่อเตรียมความพร้อมสำหรับการสอบ TOEIC
          ซึ่งเป็นมาตรฐานวัดระดับภาษาอังกฤษที่ได้รับการยอมรับในระดับสากล
          ผมได้เรียนรู้เทคนิคการทำข้อสอบ กลยุทธ์การจัดการเวลา
          และการฝึกฝนผ่านข้อสอบจำลอง
          ซึ่งช่วยเพิ่มความมั่นใจและความพร้อมในการใช้ภาษาอังกฤษเพื่อการสื่อสารในระดับนานาชาติ
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756804643/Test_of_English_for_International_Comnmunication_dt8pxs.png"
        }
      />
    ),
  },
  {
    title:
      "รางวัลชนะเลิศ ระดับเหรียญทอง การประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับอาชีวศึกษาจังหวัดอุตรดิตถ์",
    tags: ["tech", "competition_award"],
    date_issue: "03/12/2020",
    link: "https://www.thailandinnovationportal.com/info/innovation/item/2084",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับรางวัลชนะเลิศ ระดับเหรียญทอง
          จากการประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับอาชีวศึกษาจังหวัดอุตรดิตถ์
          ประจำปีการศึกษา 2563 ในประเภทที่ 6
          สิ่งประดิษฐ์ด้านนวัตกรรมซอฟต์แวร์และระบบสมองกลฝังตัว (Software &
          Embedded System Innovation) กับผลงาน {`"สุดยอดนวัตกรรมอาชีวศึกษา"`}
          จัดโดยสำนักงานคณะกรรมการการอาชีวศึกษา
          ซึ่งเป็นเวทีแข่งขันที่รวบรวมสิ่งประดิษฐ์และนวัตกรรมจากวิทยาลัยเทคนิคทั่วจังหวัด
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การได้รับรางวัลนี้เป็นผลจากการพัฒนานวัตกรรมด้านซอฟต์แวร์และระบบสมองกลฝังตัว
          ที่ผมและทีมได้ร่วมกันออกแบบและพัฒนาขึ้นเพื่อแก้ปัญหาในชีวิตประจำวัน
          โดยผ่านกระบวนการคิดค้น ออกแบบ สร้างต้นแบบ และทดสอบประสิทธิภาพ
          จนสามารถคว้ารางวัลสูงสุดในประเภทนี้ได้
          ซึ่งประสบการณ์นี้ช่วยพัฒนาทักษะการทำงานเป็นทีม การแก้ปัญหาเชิงวิศวกรรม
          และการนำเสนอผลงานในระดับการแข่งขัน
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756803564/software_Embedded_System_Innovation_qqlv01.png"
        }
      />
    ),
  },
  {
    title: "学习奖学金一等奖 (First Class Learning Scholarship)",
    tags: ["language", "competition_award"],
    date_issue: "01/11/2020",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้รับรางวัลประกาศเกียรติคุณ {`"学习奖学金一等奖"`} (First Class
          Learning Scholarship) จากมหาวิทยาลัยเทคโนโลยีอาชีวศึกษาเสฉวน
          (四川工程职业技术学院) ประเทศจีน ในปีการศึกษา 2019/2020
          ขณะที่ผมไปแลกเปลี่ยนเรียนหุ่นยนต์ในระดับ ปวส.
          รางวัลนี้มอบให้กับนักศึกษาที่มีผลการเรียนดีเด่น
          มีความมุ่งมั่นในการศึกษา และเป็นแบบอย่างที่ดีในด้านการเรียน
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การได้รับรางวัลนี้เป็นความภาคภูมิใจอย่างยิ่ง
          เพราะเป็นการแข่งขันกับนักศึกษาจีนและนักศึกษาต่างชาติหลายคน
          ผมต้องปรับตัวกับการเรียนเป็นภาษาจีน
          ทำความเข้าใจเนื้อหาวิชาด้านหุ่นยนต์และระบบอัตโนมัติที่ซับซ้อน
          พร้อมทั้งรักษาผลการเรียนให้อยู่ในระดับสูงสุดตลอดปีการศึกษา
          ซึ่งประสบการณ์นี้ช่วยพัฒนาทั้งทักษะภาษาจีน
          ความรู้ด้านเทคโนโลยีหุ่นยนต์
          และความสามารถในการปรับตัวเข้ากับสภาพแวดล้อมการเรียนรู้ระดับนานาชาติ
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756803336/First_Class_Learning_Scholarship_vfn16h.png"
        }
      />
    ),
  },
  {
    title:
      "โครงการพัฒนาผู้ประกอบการกลุ่มธุรกิจขนาดกลางและขนาดย่อม (SME) สำหรับสินค้าเกษตรและแปรรูป (GSB Smart Agripreneur)",
    tags: ["training_course"],
    date_issue: "30/03/2025",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ประสบการณ์การเข้าร่วมโครงการพัฒนาผู้ประกอบการ SME ด้านการเกษตร
        </p>
        <ListDescription
          list={[
            "เนื้อหาหลักสูตร: การพัฒนาศักยภาพผู้ประกอบการ SME ด้านสินค้าเกษตรและแปรรูป โดยธนาคารออมสินร่วมกับ PIM ครอบคลุมการวางแผนธุรกิจ การตลาดดิจิทัล และการเข้าถึงแหล่งเงินทุน",
            "กลุ่มเป้าหมาย: เกษตรกรและผู้ประกอบการที่ต้องการพัฒนาธุรกิจเกษตรให้เติบโตอย่างยั่งยืน",
            "ผลลัพธ์: ได้รับความรู้และเครื่องมือในการพัฒนาธุรกิจ พร้อมใบประกาศนียบัตรรับรองจากสถาบัน",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756802631/GSB_Smart_Agripreneur_zep3du.png"
        }
      />
    ),
  },
  {
    title:
      "การถ่ายทอดองค์ความรู้เรื่องการตัดทุเรียนที่มีความสุกแก่ที่เหมาะสม (เบื้องต้น)",
    tags: ["training_course"],
    date_issue: "07/08/2024",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้เข้าร่วมการอบรมการตัดทุเรียนที่มีความสุกแก่ที่เหมาะสม
          จัดโดยสำนักงานพัฒนาการวิจัยการเกษตร
          ซึ่งเป็นหลักสูตรเฉพาะทางที่มุ่งเน้นการพัฒนาทักษะการประเมินความสุกของทุเรียน
          และเทคนิคการเก็บเกี่ยวที่ถูกต้องเพื่อรักษาคุณภาพผลผลิต
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          การอบรมนี้ช่วยให้ผมสามารถเพิ่มมูลค่าผลผลิตทุเรียนในสวน
          และตอบโจทย์ตลาดที่ต้องการทุเรียนคุณภาพสูงสำหรับการส่งออก
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756802635/Knowledge_about_cutting_durians_with_appropriate_ripeness_basic_ak4v1h.png"
        }
      />
    ),
  },
  {
    title:
      "Rust Programming for Beginners - สร้างโปรแกรมประสิทธิภาพสูงแบบปลอดภัย",
    tags: ["tech", "training_course", "rust"],
    date_issue: "03/09/2025",
    link: "https://www.itgenius.co.th/online-courses/rust-programming-for-beginners-online.html",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้เข้าร่วมหลักสูตร Rust Programming for Beginners จากสถาบัน IT
          Genius Engineering ที่สอนโดยอาจารย์สามิตร โกยม ที่ออกแบบมาเพื่อสอนภาษา
          Rust ตั้งแต่พื้นฐานจนสามารถเขียนโปรแกรมได้จริง
          โดยเน้นการลงมือปฏิบัติผ่าน Workshop และโปรเจกต์จริง
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          ในหลักสูตรนี้ได้เรียนรู้หัวใจสำคัญของ Rust อย่างระบบ Ownership และ
          Borrowing ที่ทำให้โปรแกรมมีความปลอดภัยด้านหน่วยความจำโดยไม่ต้องพึ่ง
          Garbage Collector การจัดการข้อผิดพลาดด้วย Option และ Result การใช้งาน
          Collections อย่าง Vector, HashMap และการสร้างแอปพลิเคชัน Command-Line
          สำหรับบันทึกรายรับ-รายจ่าย พร้อมการจัดการไฟล์ CSV/JSON
          และการเขียนเทสเพื่อยืนยันความถูกต้องของโปรแกรม
          การอบรมจัดขึ้นออนไลน์สดผ่าน Zoom Meeting พร้อมวิดีโอบันทึกการอบรม 7
          วัน รวม 22 ชั่วโมง 10 นาที
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756884321/Rust_Programming_for_Beginners_fajq9f.png"
        }
      />
    ),
  },
  {
    title: "Full Stack Workshop Go with Fiber framework and NextJS",
    tags: ["tech", "training_course"],
    date_issue: "31/07/2024",
    link: "https://www.itgenius.co.th/online-courses/full-stack-go-fiber-framework-and-nextjs.html",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้เข้าร่วมหลักสูตร Full Stack Workshop Go with Fiber framework และ
          NextJS ซึ่งเป็นการฝึกอบรมเชิงปฏิบัติที่สอนการพัฒนา Web Application
          แบบครบวงจร ตั้งแต่การสร้าง RESTful API ด้วยภาษา Go และ Fiber Framework
          การจัดการระบบ Authentication ด้วย JWT ไปจนถึงการพัฒนา Frontend ด้วย
          Next.js v15 และ Tailwind CSS 4.0 รวมถึงการประยุกต์ใช้ Hexagonal
          Architecture ในการออกแบบระบบ
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          ในหลักสูตรนี้ผมได้ลงมือพัฒนาระบบร้านค้าออนไลน์แบบครบวงจรเป็นโปรเจกต์จริง
          โดยได้เรียนรู้การสร้าง Backend API ที่สมบูรณ์ การจัดการ Roles และ
          Permissions การเชื่อมต่อฐานข้อมูล PostgreSQL ด้วย GORM และการจัดการ
          State ด้วย Zustand การอบรมจัดขึ้นแบบออนไลน์สดผ่าน Zoom รวม 40 ชั่วโมง
          พร้อมวิดีโอบันทึกให้ดูย้อนหลัง
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756798542/Full_Stack_Workshop_Go_with_Fiber_framework_and_NextJS_uwmemt.png"
        }
      />
    ),
  },
  {
    title: "Full Stack Laravel 12 with Inertia.js 2 and React",
    tags: ["tech", "training_course"],
    date_issue: "31/07/2024",
    link: "https://www.itgenius.co.th/online-courses/full-stack-laravel-12-with-inertiajs-and-react.html",
    description: (
      <div className='relative'>
        <p className='indent-4 leading-relaxed'>
          ผมได้เข้าร่วมหลักสูตร Full Stack Laravel 12 with Inertia.js 2 and
          React ซึ่งเป็นการฝึกอบรมที่สอนการพัฒนา Web Application แบบ Full Stack
          โดยใช้ Laravel 12 ร่วมกับ Inertia.js 2
          ที่ช่วยให้พัฒนาได้ง่ายขึ้นโดยไม่ต้องแยก Backend และ Frontend พร้อมกับ
          React 19, TypeScript, Tailwind CSS 4.0 และ ShadCN/UI สำหรับการพัฒนา UI
          ที่ทันสมัย
        </p>
        <p className='indent-4 leading-relaxed mt-3'>
          ผมได้ลงมือพัฒนาระบบ Inventory Management System (IMS)
          เป็นโปรเจกต์หลักของหลักสูตร ซึ่งครอบคลุมการสร้างระบบ Authentication &
          Authorization, CRUD Operations สำหรับจัดการสินค้า, ระบบอัปโหลดไฟล์
          และการ Export ข้อมูล รวมถึงการจัดการฐานข้อมูลด้วย Eloquent ORM ทั้ง
          MySQL และ PostgreSQL การอบรมจัดขึ้นแบบออนไลน์สดผ่าน Zoom รวม 24
          ชั่วโมง พร้อมวิดีโอบันทึกให้ดูย้อนหลัง
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756798542/Full_Stack_Laravel_12_with_Inertia.js_2_and_React_vpkwki.png"
        }
      />
    ),
  },
  {
    title:
      "โลกทัศน์ใหม่ในปรัชญาจีน | New Horizons in Chinese Philosophy|中国哲学新视野",
    tags: ["language", "training_course"],
    certificate_no: "0628999638f442b6851dbd8b6e402d62",
    date_issue: "07/08/2024",
    link: "https://lms.thaimooc.org/courses/course-v1:XUETANGX+XUETANGX001+2021/course/",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          ภาพรวมของหลักสูตรนี้จะประกอบไปด้วยการให้ความสำคัญกับคำถามทั้ง 4
          หัวข้อต่อไปนี้
        </p>

        <ListDescription
          list={[
            "หลักสูตรนี้สอนเกี่ยวกับอะไร หลักสูตรนี้เป็นการศึกษาเกี่ยวกับปรัชญา",
            "หลักสูตรนี้ออกแบบมาเพื่อใคร หลักสูตรนี้เป็นบทเรียนออนไลน์แบบเปิด (MOOC) ซึ่งออกแบบมาเพื่อผู้ที่มีความสนใจในปรัชญาและวัฒนธรรมจีนโบราณ และถ้าคุณมีการหมั่นทบทวนตนเองอยู่เสมอหรือถ้าคุณมีการคำนึงถึงความเป็นไปของชีวิตคุณก็จะถือว่าอยู่ในเส้นทางของการคิดอย่างเป็นปรัชญาครับ การคิดอย่างปรัชญาสามารถเกิดขึ้น ณ จุดใดของชีวิตก็ได้ นี่คือจุดที่สำคัญอย่างที่สุดครับ",
            "เราจะได้เรียนรู้อะไรจากหลักสูตรนี้ อย่างแรกนะครับ คุณจะได้รับการฝึกฝนทางปรัชญา ปรัชญาไม่ใช่สิ่งที่จับต้องได้แต่เป็นกระบวนการผ่านกิจกรรมทางปัญญาและอย่างที่สอง ในหลักสูตรนี้จะพาคุณเรียนรู้ถึงวัฒนธรรมของชาวจีนในยุคทองแห่งประวัติศาสตร์",
            "เเราต้องทำอะไรบ้างในหลักสูตรนี้ อย่างแรกนะครับ ก่อนที่จะเริ่มการบรรยาย คุณควรจะต้องอ่านหนังสือจดประเด็นปัญหาและข้อสงสัยที่คุณอาจมีและอย่างที่สอง ระหว่างการบรรยาย คุณจะต้องจดบันทึกเน้นในส่วนที่สำคัญเมื่อคุณเกิดข้อสงสัยในบทเรียนให้หยุดวิดีโอและครุ่นคิด และอย่างที่สาม เมื่อจบการบรรยายแล้ว คุณจะต้องทำแบบฝึกหัดและส่งตามที่กำหนด อย่างสุดท้าย คุณจะมีช่วงเวลาสำหรับอภิปรายพูดคุยถึงปัญหากับผู้ช่วยสอน",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717764/New_Horizons_in_Chinese_Philosophy_sgpqi4.png"
        }
      />
    ),
  },
  {
    title:
      "Data + AI for Communication: PDPA การคุ้มครองข้อมูลส่วนบุคคล เตรียมความพร้อมเพื่อโอกาสทางธุรกิจ | Data + AI for Communication: PDPA for Business Opportunity",
    tags: ["training_course"],
    certificate_no: "e619dcb089974b369d2fb9723e66a129",
    date_issue: "19/12/2022",
    link: "https://lms.thaimooc.org/courses/course-v1:NIDA+NIDA010+2022/course/",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          รายวิชานี้มุ่งเน้นให้ผู้เรียนได้เกิดความเข้าใจแนวคิดเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล
          PDPA: Personal Data Protection Act เตรียมความพร้อมเพื่อโอกาสทางธุรกิจ
          ตั้งแต่นิยามข้อมูลส่วนบุคคล และการเริ่มต้นเก็บข้อมูล หลักการ
          พิจารณาในการคุ้มครองข้อมูลส่วนบุคคล กรณีศึกษา
        </p>
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717765/PDPA_pylueo.png"
        }
      />
    ),
  },
  {
    title:
      "ภาษา Python สำหรับวิทยาการข้อมูล | Fundamental of Computer Programming with Python Language",
    tags: ["tech", "training_course"],
    certificate_no: "844a52aba8134270824ad6b64c456ff8",
    date_issue: "02/09/2021",
    link: "https://lms.thaimooc.org/courses/course-v1:RMUTT+RMUTT013+2018/course/",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          ความรู้เบื้องต้นเกี่ยวกับภาษา Python เครื่องมือการพัฒนา
          การเขียนโปรแกรมด้วยคำสั่งควบคุมเบื้องต้น การสร้างฟังก์ชันเบื้องต้น
          ชนิดข้อมูลเฉพาะของภาษาการอ่านและเขียนไฟล์
        </p>

        <ListDescription
          list={[
            "เข้าใจความรู้เบื้องต้นเกี่ยวกับภาษา Python",
            "สามารถติดตั้งเครื่องมือการพัฒนาภาษา Python",
            "เข้าใจคำสั่งควบคุมเบื้องต้นของภาษา Python",
            "เข้าใจฟังก์ชันเบื้องต้นของภาษา Python",
            "เข้าใจชนิดข้อมูลเฉพาะของภาษา Python",
            "เข้าใจการอ่านและเขียนไฟล์ของภาษา Python",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717765/Python_for_Data_Science_vhze48.png"
        }
      />
    ),
  },
  {
    title: "แคลคูลัสสำหรับวิศวกร | Calculus for Engineer",
    tags: ["training_course"],
    certificate_no: "378ef8ed14ee4f68bf9c17917940b92f",
    date_issue: "13/08/2021",
    link: "https://lms.thaimooc.org/courses/course-v1:RMUTT+RMUTT014+2018/course/",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          ลิมิตและความต่อเนื่องของฟังก์ชัน การหาอนุพันธ์ บทประยุกต์ของอนุพันธ์
        </p>

        <ListDescription
          list={[
            "เข้าใจความหมายของลิมิต",
            "หาลิมิตของฟังก์ชันได้",
            "อธิบายความต่อเนื่องของฟังก์ชันได้",
            "เข้าใจการหาอนุพันธ์ของฟังก์ชัน",
            "หาอนุพันธ์ของฟังก์ชันพีชคณิตได้",
            "หาอนุพันธ์ของฟังก์ชันอดิศัยได้",
            "หาอนุพันธ์ของฟังก์ชันโดยใช้กฎลูกโซ่ได้",
            "หาอนุพันธ์ของฟังก์ชันโดยปริยายได้",
            "หาอนุพันธ์อันดับสูงได้",
            "แก้ปัญหาเกี่ยวกับความชันของกราฟได้",
            "ประยุกต์ใช้อนุพันธ์ในการหาความเร็วและความเร่ง",
            "ประยุกต์ใช้อนุพันธ์ในการหาค่าสูงสุดและค่าต่ำสุดของฟังก์ชัน",
            "เข้าใจค่าเชิงอนุพันธ์และการหาค่าโดยประมาณ",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717765/Calculus_for_Engineers_wz5ony.png"
        }
      />
    ),
  },
  {
    title:
      "การขึ้นโมเดลสามมิติด้วยเทคโนโลยีแบบจำลองสารสนเทศอาคาร | 3D Modeling using BIM Technology",
    tags: ["training_course"],
    link: "https://lms.thaimooc.org/courses/course-v1:NU+NU039+2019/course/",
    certificate_no: "88e9f095f9ad4c3c940f8795c739e866",
    date_issue: "21/08/2021",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          3D MODELING เทคโนโลยีแบบจำลองสารสนเทศอาคารด้วยโปรแกรม ArchiCAD
          โดยเนื้อหารายวิชา แบ่งออกเป็น 5 บท
        </p>

        <ListDescription
          list={[
            "ทำความรู้จัก BIM",
            "การใช้งานโปรแกรม ArchiCAD",
            "การสร้างโมเดลอาคารเสมือนจริง",
            "การสร้างแบบก่อสร้างและประมาณราคา",
            "การสร้างภาพเคลื่อนไหว Animation",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717766/3D_Modeling_using_BIM_Technology_hsuijm.png"
        }
      />
    ),
  },
  {
    title: "ทักษะงานช่างพื้นฐาน | Basic Engineering Skill",
    tags: ["training_course"],
    certificate_no: "8f1640fc0a344ab19d7697ef58490c16",
    date_issue: "12/08/2021",
    link: "https://lms.thaimooc.org/courses/course-v1:RMUTT+RMUTT002+2018/course/",
    description: (
      <div className='relative'>
        <p className=' indent-4'>
          ความรู้เบื้องต้นเกี่ยวกับทักษะงานช่างพื้นฐาน
          ความปลอดภัยเบื้องต้นในการปฏิบัติงาน
          การสร้างนิสัยอุตสาหกรรมในการปฏิบัติงาน วัสดุช่างอุตสาหกรรม
          งานเขียนแบบเทคนิค รวมทั้งความรู้พื้นฐานในงานช่างเฉพาะทางเบื้องต้น เช่น
          ช่างไฟฟ้า ช่างเมคคาทรอนิกส์ ช่างระบบสื่อสารใยแก้วนำแสง
          และช่างอิเล็กทรอนิกส์ เป็นต้น
        </p>
        <ListDescription
          list={[
            "ความรู้เบื้องต้นเกี่ยวกับทักษะงานช่างพื้นฐานได้",
            "ความปลอดภัยเบื้องต้นในการปฏิบัติงาน และนิสัยอุตสาหกรรมในการปฏิบัติงานได้",
            "การเลือกใช้วัสดุช่างอุตสาหกรรมให้สอดคล้องกับงานได้",
            "วิธีการเขียนแบบเทคนิคได้",
            "ความรู้พื้นฐานในงานช่างเฉพาะทางเบื้องต้น เช่น ช่างไฟฟ้า ช่างแมคคาทรอนิกส์ ช่างระบบสื่อสารใยแก้วนำแสง และช่างอิเล็กทรอนิกส์ ได้",
          ]}
        />
      </div>
    ),
    content: (
      <ImageCertification
        src={
          "https://res.cloudinary.com/dqj0esw62/image/upload/v1756717766/Basic_carpentry_skills_mlaasr.png"
        }
      />
    ),
  },
];
