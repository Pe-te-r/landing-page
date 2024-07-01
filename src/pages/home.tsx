import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-6 md:mb-0">
        <img 
          src="https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg" 
          alt="Tech Image" 
          className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Page</h1>
        <p className="text-lg text-gray-700 mb-4">
          I do many tech-related stuffs. How will you need me to be of service?
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Here to provide you with the best web development solutions tailored to your needs.
        </p>
        <div className="text-2xl font-semibold text-blue-600">
          <Typewriter
            options={{
              strings: [
                "Hey, I'm Phantom, a software developer.",
                "In need a web developer? Worry no more!",
                "Let's build something amazing together."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
