import sedans from "../public/images/icon-sedans.svg";
import suvs from "../public/images/icon-suvs.svg";
import lux from "../public/images/icon-luxury.svg";
function App() {
  return (
    <div className="w-full h-screen bg-slate-200 ">
      <div className="container flex flex-col p-10 mx-auto py-40 md:flex-row max-w-4xl">
        <div className="w-full bg-bright-orange p-8 rounded-l-lg">
          <img src={sedans} alt="sedans" />
          <h1 className="text-2xl font-bold text-transparent-white p-3">
            Sedans
          </h1>
          <p className="font-normal p-3 text-transparent-white">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="w-[70%] p-3 bg-very-light-gray rounded-full text-bright-orange mt-10">
            Learn More
          </button>
        </div>

        <div className="w-full bg-dark-cyan p-8">
          <img src={suvs} alt="sedans" />
          <h1 className="text-2xl font-bold text-transparent-white p-3">
            SUVs
          </h1>
          <p className="font-normal p-3 text-transparent-white">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="w-[70%] p-3 bg-very-light-gray rounded-full text-dark-cyan mt-10">
            Learn More
          </button>
        </div>

        <div className="w-full bg-very-dark-cyan p-8">
          <img src={lux} alt="sedans" />
          <h1 className="text-2xl font-bold text-transparent-white p-3">
            Luxury
          </h1>
          <p className="font-normal p-3 text-transparent-white">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="w-[70%] p-3 bg-very-light-gray rounded-full text-very-dark-cyan mt-10">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
