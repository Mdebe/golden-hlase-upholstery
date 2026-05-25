'use client';

import { useRef, useState } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Item = {
  description: string;
  quantity: number;
  price: number;
};

export default function GeneratorPage() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [docNumber, setDocNumber] = useState('GHH-001');
  const [date, setDate] = useState('');

  const [items, setItems] = useState<Item[]>([
    {
      description: '',
      quantity: 1,
      price: 0,
    },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        description: '',
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (index: number) => {
    const updated = [...items];

    updated.splice(index, 1);

    setItems(updated);
  };

  const updateItem = (
    index: number,
    field: keyof Item,
    value: string | number
  ) => {
    const updated = [...items];

    updated[index][field] = value as never;

    setItems(updated);
  };

  const total = items.reduce(
    (sum, item) =>
      sum + item.quantity * item.price,
    0
  );

  const downloadPDF = async () => {
    const element = pdfRef.current;

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

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

    pdf.save(`${docNumber}.pdf`);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

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

          <p className="mt-4 text-gray-600 text-lg">
            Create professional quotations and invoices.
          </p>
        </div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-start
          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              bg-white
              rounded-[30px]
              shadow-xl
              p-6 md:p-8
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Client Information
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
                placeholder="Document Number"
                value={docNumber}
                onChange={(e) =>
                  setDocNumber(e.target.value)
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
            </div>

            {/* ITEMS */}
            <div className="mt-10">

              <div
                className="
                  flex items-center
                  justify-between
                  mb-6
                "
              >

                <h3 className="text-2xl font-bold">
                  Services / Items
                </h3>

                <button
                  onClick={addItem}
                  className="
                    px-5 py-3
                    rounded-full
                    bg-[#D4AF37]
                    text-black
                    font-semibold
                  "
                >
                  Add Item
                </button>
              </div>

              <div className="space-y-6">

                {items.map((item, index) => (
                  <div
                    key={index}
                    className="
                      border
                      border-gray-200
                      rounded-3xl
                      p-5
                      bg-[#fafafa]
                    "
                  >

                    <div className="space-y-4">

                      <input
                        type="text"
                        placeholder="Service Description"
                        value={item.description}
                        onChange={(e) =>
                          updateItem(
                            index,
                            'description',
                            e.target.value
                          )
                        }
                        className="
                          w-full
                          p-4
                          rounded-2xl
                          border border-gray-300
                        "
                      />

                      <div className="grid grid-cols-2 gap-4">

                        <input
                          type="number"
                          placeholder="Qty"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(
                              index,
                              'quantity',
                              Number(e.target.value)
                            )
                          }
                          className="
                            w-full
                            p-4
                            rounded-2xl
                            border border-gray-300
                          "
                        />

                        <input
                          type="number"
                          placeholder="Price"
                          value={item.price}
                          onChange={(e) =>
                            updateItem(
                              index,
                              'price',
                              Number(e.target.value)
                            )
                          }
                          className="
                            w-full
                            p-4
                            rounded-2xl
                            border border-gray-300
                          "
                        />
                      </div>

                      {items.length > 1 && (
                        <button
                          onClick={() =>
                            removeItem(index)
                          }
                          className="
                            text-red-500
                            font-semibold
                          "
                        >
                          Remove Item
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOWNLOAD */}
            <button
              onClick={downloadPDF}
              className="
                mt-10
                w-full
                py-5
                rounded-full
                bg-[#D4AF37]
                text-black
                font-bold
                text-lg
                hover:scale-[1.02]
                transition
              "
            >
              Download PDF
            </button>
          </div>

          {/* RIGHT SIDE PDF */}
          <div className="overflow-auto">

            <div
              ref={pdfRef}
              className="
                bg-white
                rounded-[30px]
                shadow-2xl
                p-6 md:p-12
                min-w-[340px]
              "
            >

              {/* TOP */}
              <div
                className="
                  flex
                  flex-col md:flex-row
                  justify-between
                  gap-8
                  border-b
                  pb-10
                "
              >

                <div>

                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-28"
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

                  <p className="mt-4 text-gray-600">
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

                <div className="md:text-right">

                  <h1
                    className="
                      text-5xl
                      font-black
                      text-[#D4AF37]
                    "
                  >
                    QUOTATION
                  </h1>

                  <p className="mt-5">
                    <strong>No:</strong>{' '}
                    {docNumber}
                  </p>

                  <p className="mt-2">
                    <strong>Date:</strong>{' '}
                    {date}
                  </p>
                </div>
              </div>

              {/* CUSTOMER */}
              <div className="mt-12">

                <h3 className="text-2xl font-bold">
                  Customer Details
                </h3>

                <p className="mt-5 text-lg">
                  {customer || 'Customer Name'}
                </p>

                <p className="text-gray-600 mt-2">
                  {phone || 'Phone Number'}
                </p>
              </div>

              {/* TABLE */}
              <div className="mt-12 overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="bg-[#D4AF37] text-black">

                      <th className="p-4 text-left">
                        Description
                      </th>

                      <th className="p-4 text-left">
                        Qty
                      </th>

                      <th className="p-4 text-left">
                        Price
                      </th>

                      <th className="p-4 text-left">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {items.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b"
                      >

                        <td className="p-4">
                          {item.description}
                        </td>

                        <td className="p-4">
                          {item.quantity}
                        </td>

                        <td className="p-4">
                          R {item.price}
                        </td>

                        <td className="p-4">
                          R{' '}
                          {item.quantity *
                            item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* TOTAL */}
              <div
                className="
                  mt-12
                  flex justify-end
                "
              >

                <div
                  className="
                    bg-[#fafafa]
                    rounded-3xl
                    p-8
                    w-full md:w-[300px]
                  "
                >

                  <div
                    className="
                      flex justify-between
                      text-2xl
                      font-black
                    "
                  >

                    <span>Total</span>

                    <span className="text-[#D4AF37]">
                      R {total}
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div
                className="
                  mt-20
                  border-t
                  pt-10
                  text-center
                "
              >

                <h3 className="text-2xl font-bold">
                  Thank You For Your Business
                </h3>

                <p className="mt-4 text-gray-500">
                  Premium upholstery, luxury seat covers,
                  and furniture restoration services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}