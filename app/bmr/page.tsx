"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BmrPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmrResult, setBmrResult] = useState<string>('0.00');

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (w > 0 && h > 0 && a > 0) {
      let bmr = 0;
      if (gender === 'male') {
        bmr = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
      } else {
        bmr = 665 + (9.6 * w) + (1.8 * h) - (4.7 * a);
      }
      setBmrResult(bmr.toFixed(2));
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setBmrResult('0.00');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <div className="w-full bg-[#1e74fd] text-white py-3 flex justify-center items-center gap-3 text-sm font-bold shadow-sm">
        <Link href="/" className="hover:text-gray-200">หน้าหลัก</Link> <span>|</span>
        <Link href="/bmi" className="hover:text-gray-200">หน้า BMI</Link> <span>|</span>
        <Link href="/bmr" className="hover:text-gray-200">หน้า BMR</Link> <span>|</span>
        <Link href="/car" className="hover:text-gray-200">หน้า CAR</Link>
      </div>

      <div className="flex-grow flex flex-col items-center pt-10 pb-10 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
          
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-black">BMR Calculator</h1>
            <p className="text-xs text-gray-500 mb-4">คำนวณ BMR</p>
            <div className="flex justify-center">
              <Image src="/icon_bmr.png" alt="BMR" width={150} height={150} className="object-contain" />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" placeholder="เช่น 65" />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" placeholder="เช่น 170" />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ป้อนอายุ (ปี)</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" placeholder="เช่น 25" />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-700 mb-2">เพศ</label>
            <div className="flex gap-4 text-sm text-black">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600" /> ชาย
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-blue-600" /> หญิง
              </label>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button onClick={calculateBMR} className="flex-1 bg-[#8a2be2] text-white font-bold py-2.5 rounded-md hover:bg-purple-700 transition text-sm">
              คำนวณ BMR
            </button>
            <button onClick={resetForm} className="flex-1 bg-[#ff3b30] text-white font-bold py-2.5 rounded-md hover:bg-red-600 transition text-sm">
              รีเซต
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-700 font-bold">
              ค่า BMR ที่คำนวณได้ <span className="text-[#1e74fd] text-xl ml-2">{bmrResult}</span>
            </p>
          </div>

          <Link href="/">
            <button className="w-full bg-[#e2e8f0] text-gray-700 font-bold py-2.5 rounded-md hover:bg-gray-300 transition text-sm">
              กลับหน้าหลัก
            </button>
          </Link>
        </div>

        <div className="text-center text-[10px] text-gray-400 mt-8">
          <p>© 2024 SAU. All rights reserved.</p>
          <p>Created by Nimmin SAU</p>
        </div>
      </div>
    </div>
  );
}