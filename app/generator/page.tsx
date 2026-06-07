'use client';

import { useRef, useState } from 'react';

type Item = {
  description: string;
  quantity: number;
  price: number;
};

export default function GeneratorPage() {
  const quoteRef = useRef<HTMLDivElement>(null);

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

  const saveQuotationImage = async () => {
    try {
      const element = quoteRef.current;

      if (!element) return;

      const html2canvas =
        (await import('html2canvas')).default;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const image = canvas.toDataURL(
        'image/png',
        1.0
      );

      const link = document.createElement('a');

      link.href = image;

      link.download = `${docNumber}.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error(error);

      alert('Failed to save quotation image.');
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] py-8 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">

          <h1
            className="
              text-4xl md:text-6xl
              font-black
              text-white
              leading-tight
            "
          >
            Quotation
            <span className="text-[#D4AF37]">
              {' '}Generator
            </span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Create and save professional quotation images.
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
              bg-[#111111]
              border border-[#D4AF37]/10
              rounded-[30px]
              p-6 md:p-8
              shadow-2xl
            "
          >

            <h2 className="text-3xl font-bold mb-8 text-white">
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
                  border border-[#D4AF37]/10
                  bg-black
                  text-white
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
                  border border-[#D4AF37]/10
                  bg-black
                  text-white
                  outline-none
                  focus:border-[#D4AF37]
                "
              />

              <input
                type="text"
                placeholder="Quotation Number"
                value={docNumber}
                onChange={(e) =>
                  setDocNumber(e.target.value)
                }
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border border-[#D4AF37]/10
                  bg-black
                  text-white
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
                  border border-[#D4AF37]/10
                  bg-black
                  text-white
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

                <h3 className="text-2xl font-bold text-white">
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
                    hover:scale-105
                    transition
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
                      bg-black
                      border border-[#D4AF37]/10
                      rounded-3xl
                      p-5
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
                          border border-[#D4AF37]/10
                          bg-[#111111]
                          text-white
                          outline-none
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
                            border border-[#D4AF37]/10
                            bg-[#111111]
                            text-white
                            outline-none
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
                            border border-[#D4AF37]/10
                            bg-[#111111]
                            text-white
                            outline-none
                          "
                        />
                      </div>

                      {items.length > 1 && (
                        <button
                          onClick={() =>
                            removeItem(index)
                          }
                          className="
                            text-red-400
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

            {/* SAVE BUTTON */}
            <button
              onClick={saveQuotationImage}
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
                shadow-xl shadow-[#D4AF37]/20
              "
            >
              Save Quotation Image
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="overflow-auto">

            <div
              ref={quoteRef}
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
                  border-gray-200
                  pb-10
                "
              >

                <div>

                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-32"
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

                <table className="w-full min-w-[600px]">

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
                    w-full md:w-[320px]
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
                  border-gray-200
                  pt-10
                  text-center
                "
              >

                <h3 className="text-2xl font-bold">
                  Thank You For Your Business
                </h3>

                <p className="mt-4 text-gray-500 leading-8">
                  Premium upholstery, luxury seat covers,
                  vehicle interiors, and furniture restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}