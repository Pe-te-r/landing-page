

const Services = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center md:px-12 lg:px-24 xl:px-48">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to <strong>Phantom Softwares</strong>, where innovation meets excellence. Since our inception, we have been committed to providing top-notch software solutions that empower businesses to achieve their goals.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h3>
          <p className="text-gray-700 mb-6">
            Founded in 20204, <strong>Phantom Softwares</strong> started with a vision to revolutionize the software industry. Over the years, we have grown from a small startup to a leading provider of innovative software solutions, trusted by clients worldwide.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-left text-gray-700 mb-6">
            <li><strong>Innovation:</strong> We stay at the forefront of technology, continuously improving our products to meet the changing needs of our clients.</li>
            <li><strong>Quality:</strong> Our solutions are built with the highest standards of quality and reliability, ensuring optimal performance and satisfaction.</li>
            <li><strong>Customer-Centric:</strong> We prioritize our clients' needs and provide exceptional customer support to ensure their success.</li>
            <li><strong>Expertise:</strong> Our team of experienced professionals brings a wealth of knowledge and expertise to every project, delivering results that exceed expectations.</li>
            <li><strong>Integrity:</strong> We operate with transparency and integrity, building long-lasting relationships based on trust and respect.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            Our mission is to deliver innovative software solutions that drive success for our clients. We strive to be a trusted partner, helping businesses navigate the complexities of the digital world with ease.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 mb-6">
            Our vision is to be a global leader in software technology, recognized for our commitment to quality, innovation, and customer satisfaction.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
          <p className="text-gray-700 mb-6">
            We are proud of our talented and dedicated team of professionals. Our diverse team brings a wealth of experience and creativity to the table, working collaboratively to achieve outstanding results.
          </p>
          <div className="flex justify-center items-center">
            <img 
              src="https://i.pinimg.com/236x/e9/98/1c/e9981c021dde69c5ce408e4f6934e1de.jpg" 
              alt="Company Team" 
              className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;