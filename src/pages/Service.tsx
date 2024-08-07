
// const Service = () => {
//   return (
//     <div className=" py-12">
//       <div className="container mx-auto px-6 text-center md:px-12 lg:px-24 xl:px-48">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Software?</h2>
//         <div className="flex flex-wrap justify-center items-center">
//           <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality and Reliability</h3>
//               <p className="text-gray-600">Our software is built to the highest standards, ensuring reliability and performance.</p>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Solutions</h3>
//               <p className="text-gray-600">We provide bespoke software solutions tailored to meet your unique business needs.</p>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovative Technology</h3>
//               <p className="text-gray-600">Stay ahead of the competition with our state-of-the-art software technologies.</p>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Exceptional Support</h3>
//               <p className="text-gray-600">Our dedicated support team is here to ensure your success every step of the way.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
// import React from 'react';
// import Typewriter from 'typewriter-effect';

const services = [
  {
    title: "Quality and Reliability",
    description: "Our software is built to the highest standards, ensuring reliability and performance.",
    imgSrc: "https://i.pinimg.com/236x/b2/e5/8f/b2e58f2f1aa01fbbfcdb54fc406d609c.jpg",
  },
  {
    title: "Custom Solutions",
    description: "We provide bespoke software solutions tailored to meet your unique business needs.",
    imgSrc: "https://i.pinimg.com/236x/46/f4/03/46f403a180cf9c0487ab2bc5589ca4d1.jpg",
  },
  {
    title: "Innovative Technology",
    description: "Stay ahead of the competition with our state-of-the-art software technologies.",
    imgSrc: "https://i.pinimg.com/474x/60/d4/5d/60d45d1243eec4c28fbf821b9e8474f8.jpg",
  },
  {
    title: "Exceptional Support",
    description: "Our dedicated support team is here to ensure your success every step of the way.",
    imgSrc: "https://i.pinimg.com/236x/14/65/e1/1465e1af155bfe4c00aabd25439a3c8f.jpg",
  },
];

const Service = () => {
  return (
    <div className="py-12 bg-base-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
        <h2 className="text-3xl font-bold text-white-800 mb-8 text-center">Why Choose Our Software?</h2>
        <div className="flex flex-col items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center w-full mb-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-6 md:mb-0">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white-800 mb-4">{service.title}</h3>
                <p className="text-lg text-white-700 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

