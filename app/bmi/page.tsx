"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BmiPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<string>('0.00');
  const [bmiStatus, setBmiStatus] = useState<string>('XXXXX');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      setBmiResult(bmi.toFixed(2));

      if (bmi < 18.5) setBmiStatus('น้ำหนักน้อย / ผอม');
      else if (bmi < 23) setBmiStatus('ปกติ (สุขภาพดี)');
      else if (bmi < 25) setBmiStatus('ท้วม / โรคอ้วนระดับ 1');
      else if (bmi < 30) setBmiStatus('อ้วน / โรคอ้วนระดับ 2');
      else setBmiStatus('อ้วนมาก / โรคอ้วนระดับ 3');
    } else {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmiResult('0.00');
    setBmiStatus('XXXXX');
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
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100 relative">
          
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-black">BMI Calculator</h1>
            <p className="text-xs text-gray-500 mb-4">คำนวณ BMI</p>
            <div className="flex justify-center">
              <Image src="/icon_bmi.png" alt="BMI" width={150} height={150} className="object-contain" />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-700 mb-1">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              className="w-full border border-gray-300 p-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" 
              placeholder="เช่น 65" 
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-700 mb-1">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              className="w-full border border-gray-300 p-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" 
              placeholder="เช่น 170" 
            />
          </div>

          <button onClick={calculateBMI} className="w-full bg-[#1e74fd] text-white font-bold py-2.5 rounded-md mb-3 hover:bg-blue-700 transition text-sm">
            คำนวณ BMI
          </button>

          <button onClick={resetForm} className="w-full bg-[#e2e8f0] text-gray-700 font-bold py-2.5 rounded-md mb-6 hover:bg-gray-300 transition text-sm">
            รีเซต
          </button>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-700 font-bold mb-2">
              ค่า BMI ที่คำนวณได้ <span className="text-[#1e74fd] text-xl ml-2">{bmiResult}</span>
            </p>
            <p className="text-sm text-gray-700 font-bold">
              ภาวะความอ้วน <span className="text-[#1e74fd] text-lg ml-2">{bmiStatus}</span>
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