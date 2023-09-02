import Service from "./Service";
import services from "../../../../data/services.json";
import features from "../../../../data/features.json";
import chooseUsVideo from "../../../../../public/chooseus-video.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./web-info.scss";

function WebInfo() {
  return (
    <section className="flex flex-col justify-center items-center gap-60">
      <div>
        <h2 className="text-4xl text-red-700 font-semibold text-center mb-10">
          Our services
        </h2>
        <div className="flex gap-10">
          {services.map((service) => (
            <Service
              key={service.id}
              title={service.service}
              description={service.description}
              img={service.img}
            />
          ))}
        </div>
      </div>
      <div className="web-info w-4/5">
        <div className="flex flex-col gap-8 w-1/3">
          <h2 className="text-4xl font-bold">We Are a Trusted Name in Auto</h2>
          <p className="text-gray-800">
            Welcome to our old car showroom, where we bring timeless classics
            and vintage beauties to life. With a passion for preserving
            automotive history, we curate a collection of meticulously restored
            cars ready to charm any enthusiast.
          </p>
          <p className="text-gray-800">
            Step into our showroom and experience the nostalgia, elegance, and
            undeniable charm of our handpicked selection of vintage automobiles.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          {features.map((feature) => (
            <div key={feature.id}>
              <img src={feature.img} alt={feature.name} className="mb-2" />
              <div className="font-bold">{feature.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-items-start items-center w-full">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Why People Choose Us</h2>
          <p className="text-gray-800 w-1/2">
            At our old car showroom, we prioritize the security and protection
            of our customers and their valuable encouragement.
          </p>
          <ul className="text-gray-800 w-1/2">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="text-white bg-red-500 rounded-full" /> <span>Exceptional Quality</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="text-white bg-red-500 rounded-full" /> <span>Extensive Selection</span>
            </li>
            <li>
              <FontAwesomeIcon  icon={faCircleCheck} className="text-white bg-red-500 rounded-full"/> <span>Customer Satisfaction</span>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="text-white bg-red-500 rounded-full" /> <span>Confidentiality</span>
            </li>
          </ul>
        </div>
        <div className="">
          <img src={chooseUsVideo} alt="Choose us video" />
        </div>
      </div>
    </section>
  );
}

export default WebInfo;
