import heroBg from "/hero-bg.jpg";
import "./hero-style.scss";

function Hero() {
  return (
    <div className="hero h-3/5 min-w-full">
      <div className="ml-64 mt-60">
        <h3 className="text-white text-3xl mb-4">Welcome to Timeless Rides</h3>
        <h1 className="text-white font-bold text-5xl">FIND YOUR DREAM CAR</h1>
      </div>
    </div>
  );
}

export default Hero;
