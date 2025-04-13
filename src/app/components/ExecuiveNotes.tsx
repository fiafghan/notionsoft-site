'use client';

import Image from 'next/image';

const executives = [
  {
    name: 'S. Naweed Sayidi',
    title: 'CEO, NotionSoft',
    note:
      "At NotionSoft, our mission goes beyond delivering technology — we strive to create meaningful digital experiences that drive real business transformation. Every line of code, every process we optimize, and every solution we build is guided by our passion for excellence and innovation. We are not just a service provider — we are a long-term partner in our clients' growth journeys.",
    image: '/images/manivannan.jpg',
  },
  {
    name: 'Eng. Jalaluddin Bakhty',
    title: 'Database Developer',
    image: '/images/rakesh.jpg',
  },
  {
    name: 'Eng. Waheedullah Safi',
    title: 'Full Stack Developer',
    image: '/images/anil.jpg',
  },
  {
    name: 'Eng. Emran Orya',
    title: 'Full Stack Developer',
    image: '/images/milind.jpg',
  },
];

const ExecutiveNotes = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Executive Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {executives.map((exec, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6"
          >
            <div className="flex-shrink-0">
              <Image
                src={exec.image}
                alt={exec.name}
                width={120}
                height={120}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{exec.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{exec.title}</p>
              {exec.note && (
                <p className="text-gray-700 text-base leading-relaxed">{exec.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecutiveNotes;
