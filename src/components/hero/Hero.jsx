import heroBg from "/hero-bg.jpg";
import "./hero-style.scss";

function Hero() {
  return (
    <div className="hero h-80 min-w-full relative">
      <div className="top-1/2 left-28 absolute">
        <h3 className="text-white text-3xl mb-4">Welcome to Timeless Rides</h3>
        <h1 className="text-white font-bold text-5xl">FIND YOUR DREAM CAR</h1>
      </div>
    </div>
  );
}

export default Hero;
