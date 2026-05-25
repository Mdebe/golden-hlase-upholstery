'use client';

import { useRef, useState } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function InvoicePage() {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('INV-001');
  const [date, setDate] = useState('');

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const imgProps = pdf.getImageProperties(imgData);

    const pdfHeight =
      (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(`${invoiceNo}.pdf`);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-10 md:px-10">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1
          className="
            text-4xl md:text-6xl
            font-black
            text-black
          "
        >
          Invoice &
          <span className="text-[#D4AF37]">
            {' '}Quotation Generator
          </span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Create professional invoices and quotations
          for Golden H.N Hlase Upholstery.
        </p>
      </div>

      {/* MOBILE RESPONSIVE GRID */}
      <div
        className="
          max-w-7xl mx-auto
          grid
          lg:grid-cols-2
          gap-10
          items-start
        "
      >

        {/* FORM SIDE */}
        <div
          className="
            bg-white
            rounded-[30px]
            p-6 md:p-10
            shadow-xl
            border border-gray-200
          "
        >

          <h2 className="text-3xl font-bold mb-8">
            Enter Invoice Details
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Customer Name"
              value={customer}
              onChange={(e) =>
                setCustomer(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <input
              type="text"
              placeholder="Service"
              value={service}
              onChange={(e) =>
                setService(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <input
              type="text"
              placeholder="Invoice Number"
              value={invoiceNo}
              onChange={(e) =>
                setInvoiceNo(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                border border-gray-300
                outline-none
                focus:border-[#D4AF37]
              "
            />

            <button
              onClick={downloadPDF}
              className="
                w-full
                py-5
                rounded-full
                bg-[#D4AF37]
                text-black
                font-bold
                text-lg
                hover:scale-[1.02]
                transition
                shadow-xl
              "
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* PREVIEW SIDE */}
        <div
          className="
            overflow-x-auto
          "
        >
          <div
            ref={invoiceRef}
            className="
              bg-white
              min-h-[1100px]
              p-6 md:p-12
              rounded-[30px]
              shadow-2xl
              text-black
              min-w-[320px]
            "
          >

            {/* TOP */}
            <div
              className="
                flex
                flex-col md:flex-row
                md:items-center
                md:justify-between
                gap-8
                border-b
                border-gray-200
                pb-10
              "
            >

              <div>

                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-32 object-contain"
                />

                <h2
                  className="
                    text-3xl
                    font-black
                    mt-4
                  "
                >
                  Golden H.N Hlase Upholstery
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  8 Jacaranda, Arboretum,
                  Richards Bay, 3900
                </p>

                <p className="text-gray-600">
                  061 310 5030
                </p>

                <p className="text-gray-600">
                  www.goldenhnhlase.co.za
                </p>
              </div>

              <div className="text-left md:text-right">

                <h1
                  className="
                    text-5xl
                    font-black
                    text-[#D4AF37]
                  "
                >
                  INVOICE
                </h1>

                <p className="mt-5">
                  <strong>No:</strong> {invoiceNo}
                </p>

                <p className="mt-2">
                  <strong>Date:</strong> {date}
                </p>
              </div>
            </div>

            {/* CUSTOMER */}
            <div className="mt-12">

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-5
                "
              >
                Bill To:
              </h3>

              <p className="text-lg">
                {customer || 'Customer Name'}
              </p>

              <p className="text-gray-600 mt-2">
                {phone || 'Phone Number'}
              </p>
            </div>

            {/* TABLE */}
            <div className="mt-12 overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>

                  <tr className="bg-[#D4AF37] text-black">

                    <th className="p-5 text-left">
                      Service
                    </th>

                    <th className="p-5 text-left">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b">

                    <td className="p-5">
                      {service || 'Service'}
                    </td>

                    <td className="p-5">
                      R {amount || '0.00'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TOTAL */}
            <div className="mt-16 flex justify-end">

              <div
                className="
                  w-full md:w-[320px]
                  bg-[#fafafa]
                  rounded-3xl
                  p-8
                "
              >

                <div
                  className="
                    flex
                    justify-between
                    text-2xl
                    font-black
                  "
                >
                  <span>Total</span>

                  <span className="text-[#D4AF37]">
                    R {amount || '0.00'}
                  </span>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div
              className="
                mt-20
                pt-10
                border-t
                border-gray-200
                text-center
              "
            >

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Thank You For Your Business
              </h3>

              <p className="mt-4 text-gray-500 leading-7">
                Premium upholstery, luxury seat covers,
                furniture restoration, and custom interiors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}