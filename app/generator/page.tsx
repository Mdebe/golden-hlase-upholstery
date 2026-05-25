'use client';

import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  FileText,
  Download,
  Phone,
  MapPin,
  Mail,
  Globe,
} from 'lucide-react';

export default function InvoiceQuotationGenerator() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const [documentType, setDocumentType] = useState('Quotation');

  const [form, setForm] = useState({
    customer: '',
    phone: '',
    email: '',
    address: '',
    item: '',
    quantity: '1',
    price: '',
    deposit: '',
  });

  const subtotal =
    Number(form.quantity || 0) * Number(form.price || 0);

  const total = subtotal;

  const balance = total - Number(form.deposit || 0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const downloadPDF = async () => {
    if (!pdfRef.current) return;

    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(
      `${documentType.toLowerCase()}-${form.customer || 'document'}.pdf`
    );
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-[#111111] border border-[#D4AF37]/10 rounded-[40px] p-8 shadow-2xl">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
              <FileText className="text-[#D4AF37]" />
            </div>

            <div>
              <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs">
                Generator
              </p>

              <h1 className="text-3xl font-black">
                Invoice & Quotation
              </h1>
            </div>
          </div>

          <div className="space-y-5">

            <select
              value={documentType}
              onChange={(e) =>
                setDocumentType(e.target.value)
              }
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            >
              <option>Quotation</option>
              <option>Invoice</option>
            </select>

            <input
              type="text"
              name="customer"
              placeholder="Customer Name"
              value={form.customer}
              onChange={handleChange}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              name="address"
              placeholder="Customer Address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none resize-none"
            />

            <input
              type="text"
              name="item"
              placeholder="Service Description"
              value={form.item}
              onChange={handleChange}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            />

            <div className="grid grid-cols-2 gap-5">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={form.quantity}
                onChange={handleChange}
                className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            <input
              type="number"
              name="deposit"
              placeholder="Deposit Paid"
              value={form.deposit}
              onChange={handleChange}
              className="w-full bg-black border border-[#D4AF37]/20 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={downloadPDF}
              className="w-full mt-4 py-5 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition"
            >
              <Download />
              Download PDF
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div>
          <div
            ref={pdfRef}
            className="bg-white text-black rounded-[40px] p-10 shadow-2xl"
          >

            {/* HEADER */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-8">

              <div>
                <h1 className="text-4xl font-black">
                  Golden H.N Hlase Upholstery
                </h1>

                <p className="text-[#D4AF37] font-semibold mt-2">
                  Luxury Upholstery & Premium Seat Covers
                </p>
              </div>

              <div className="text-right">
                <h2 className="text-3xl font-black text-[#D4AF37]">
                  {documentType}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Date: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* BUSINESS INFO */}
            <div className="grid md:grid-cols-2 gap-10 mt-10">

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#D4AF37] w-5 h-5" />
                  <p>061 310 5030</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-[#D4AF37] w-5 h-5" />
                  <p>info@goldenhnhlase.co.za</p>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="text-[#D4AF37] w-5 h-5" />
                  <p>www.goldenhnhlase.co.za</p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-[#D4AF37] w-5 h-5" />
                  <p>
                    8 Jacaranda, Arboretum,
                    Richards Bay, 3900
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">
                  Customer Details
                </h3>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Name:</strong>{' '}
                    {form.customer || 'Customer Name'}
                  </p>

                  <p>
                    <strong>Phone:</strong>{' '}
                    {form.phone || 'Phone Number'}
                  </p>

                  <p>
                    <strong>Email:</strong>{' '}
                    {form.email || 'Email Address'}
                  </p>

                  <p>
                    <strong>Address:</strong>{' '}
                    {form.address || 'Customer Address'}
                  </p>
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200">
              <table className="w-full">
                <thead className="bg-[#111111] text-white">
                  <tr>
                    <th className="text-left p-5">
                      Description
                    </th>
                    <th className="text-left p-5">
                      Qty
                    </th>
                    <th className="text-left p-5">
                      Price
                    </th>
                    <th className="text-left p-5">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-5">
                      {form.item || 'Service'}
                    </td>

                    <td className="p-5">
                      {form.quantity}
                    </td>

                    <td className="p-5">
                      R {form.price || 0}
                    </td>

                    <td className="p-5 font-bold">
                      R {subtotal.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TOTALS */}
            <div className="mt-10 ml-auto max-w-md space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="font-medium">
                  Subtotal
                </span>

                <span>
                  R {subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-medium">
                  Deposit Paid
                </span>

                <span>
                  R {Number(form.deposit || 0).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-2xl font-black text-[#D4AF37]">
                <span>
                  Balance Due
                </span>

                <span>
                  R {balance.toFixed(2)}
                </span>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 leading-8">
                Thank you for choosing Golden H.N Hlase Upholstery.
                We appreciate your business and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
