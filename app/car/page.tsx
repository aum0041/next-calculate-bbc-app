"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CarPage() {
  const [customerName, setCustomerName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPercent, setDownPercent] = useState('15');
  const [months, setMonths] = useState('24');
  const [monthlyResult, setMonthlyResult] = useState<string>('0.00');

  const calculateInstallment = () => {
    const price = parseFloat(carPrice);
    const rate = parseFloat(interestRate);
    const downP = parseFloat(downPercent);
    const m = parseInt(months);

    if (price > 0 && rate > 0) {
      const downPaymentAmount = price * (downP / 100);
      const financeAmount = price - downPaymentAmount;
      const years = m / 12;
      const totalInterest = financeAmount * (rate / 100) * years;
      const totalPay = financeAmount + totalInterest;
      const monthly = totalPay / m;
      
      setMonthlyResult(monthly.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    } else {
      alert("กรุณากรอกข้อมูลราคารถและดอกเบี้ยให้ถูกต้อง");
    }
  };

  const resetForm = () => {
    setCustomerName('');
    setCarPrice('');
    setInterestRate('');
    setDownPercent('15');
    setMonths('24');
    setMonthlyResult('0.00');
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
            <h1 className="text-2xl font-extrabold text-black">Car Installment Calculator</h1>
            <p className="text-xs text-gray-500 mb-4">คำนวณ Car Installment</p>
            <div className="flex justify-center">
              <Image src="/icon_car.png" alt="Car" width={150} height={150} className="object-contain" />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ชื่อผู้เช่าซื้อ</label>
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ราคารถ (บาท)</label>
            <input type="number" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-1">ดอกเบี้ยต่อปี (%)</label>
            <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-bold text-gray-700 mb-2">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap gap-3 text-xs text-black">
              {['15', '20', '25', '30', '35'].map((percent) => (
                <label key={percent} className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="downPercent" value={percent} checked={downPercent === percent} onChange={(e) => setDownPercent(e.target.value)} className="w-3 h-3 text-blue-600" /> {percent}%
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-700 mb-1">จำนวนเดือนที่ผ่อน</label>
            <select value={months} onChange={(e) => setMonths(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md text-sm text-black focus:outline-none focus:border-blue-500 bg-white">
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          <div className="flex gap-3 mb-6">
            <button onClick={calculateInstallment} className="flex-1 bg-[#1e74fd] text-white font-bold py-2.5 rounded-md hover:bg-blue-700 transition text-sm">
              คำนวณ
            </button>
            <button onClick={resetForm} className="flex-1 bg-[#e2e8f0] text-gray-700 font-bold py-2.5 rounded-md hover:bg-gray-300 transition text-sm">
              ล้างข้อมูล
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-700 font-bold">
              ผ่อนชำระต่อเดือน <span className="text-black text-lg ml-2">{monthlyResult} บาท</span>
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