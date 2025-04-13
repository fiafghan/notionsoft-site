'use client';
import Link from 'next/link';

const BusinessCards = () => {
  const cardData = [
    {
      title: 'Software',
      description: 'Developed an efficient data integration and interaction solution for an insurance service provider.',
      backgroundImage: '/images/software-bg.jpg', // Add suitable background image path
    },
    {
      title: 'Software Testing',
      description: 'Crafted and tested a customized home automation system to deliver maximum performance at cost-effective rates.',
      backgroundImage: '/images/software-testing-bg.jpg', // Add suitable background image path
    },
    {
      title: 'BPM',
      description: 'Built a responsive customer care service structure for a leading Indian food delivery portal.',
      backgroundImage: '/images/bpm-bg.jpg', // Add suitable background image path
    },
    {
      title: 'Automotive',
      description: 'Helped a leading industrial automation company combat data breach uncertainty.',
      backgroundImage: '/images/automotive-bg.jpg', // Add suitable background image path
    },
    {
      title: 'Retail',
      description: 'Provided online support for a leading consumer brand in the USA.',
      backgroundImage: '/images/retail-bg.jpg', // Add suitable background image path
    },
    {
      title: 'E-commerce',
      description: 'Developed e-commerce portals for the manufacturing industry.',
      backgroundImage: '/images/ecommerce-bg.jpg', // Add suitable background image path
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group"
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative p-6 flex flex-col justify-end h-full">
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">{card.title}</h3>
            <p className="text-lg text-gray-500">{card.description}</p>
            <Link
              href="#"
              className="mt-4 inline-block px-6 py-2 text-sm font-medium text-black bg-gradient-to-r from-gray-300 via-orange-200 to-gray-100 rounded-md hover:bg-blue-700 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCards;
