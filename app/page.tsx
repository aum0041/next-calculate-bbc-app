import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-16 px-4 font-sans">
      
      {/* ส่วนหัว (Header & Logo) */}
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="mb-6">
          {/* อย่าลืมนำรูป calc-icon.png ไปใส่ในโฟลเดอร์ public นะครับ */}
          <Image 
            src="/icon_calculator.png" 
            alt="Calculator Logo" 
            width={240} 
            height={240} 
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
          เครื่องมือคำนวณออนไลน์
        </h1>
        <p className="text-base text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
        </p>
      </div>

      {/* ส่วนการ์ดเมนู (Cards) */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full max-w-6xl">
        
        {/* การ์ด BMI */}
        <Link href="/bmi" className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full md:w-1/3 max-w-[340px] cursor-pointer group">
          <div className="w-48 h-48 relative mb-6 group-hover:scale-105 transition-transform duration-300">
            <Image 
            src="/icon_bmi.png" 
            alt="BMI Icon" 
            width={1000} 
            height={1000} 
            className="object-contain" 
            />
          </div>
          <h2 className="text-xl font-bold text-black mb-2 text-center">
            BMI (ดัชนีมวลกาย)
          </h2>
          <p className="text-sm text-gray-600 text-center px-2">
            คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่
          </p>
        </Link>

        {/* การ์ด BMR */}
        <Link href="/bmr" className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full md:w-1/3 max-w-[340px] cursor-pointer group">
          <div className="w-48 h-48 relative mb-6 group-hover:scale-105 transition-transform duration-300">
            <Image 
            src="/icon_bmr.png" 
            alt="BMR Icon" 
            width={1000} 
            height={1000} 
            className="object-contain" 
            />
          </div>
          <h2 className="text-xl font-bold text-black mb-2 text-center">
            BMR (อัตราการเผาผลาญ)
          </h2>
          <p className="text-sm text-gray-600 text-center px-2">
            คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน
          </p>
        </Link>

        {/* การ์ด Car */}
        <Link href="/car" className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full md:w-1/3 max-w-[340px] cursor-pointer group">
          <div className="w-48 h-48 relative mb-6 group-hover:scale-105 transition-transform duration-300">
            <Image 
            src="/icon_car.png" 
            alt="Car Icon" 
            width={1000} 
            height={1000} 
            className="object-contain" 
            />
          </div>
          <h2 className="text-xl font-bold text-black mb-2 text-center">
            การผ่อนชำระรถยนต์
          </h2>
          <p className="text-sm text-gray-600 text-center px-2">
            คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยทั้งหมด
          </p>
        </Link>

      </div>
    </div>
  );
}