import Service from "./Service";
import services from "../../../../data/services.json";

function WebInfo() {
  return (
    <section>
      <h2 className="text-4xl text-red-700 font-bold text-center">Our services</h2>
      <div className="flex gap-6">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.service}
            description={service.description}
            img={service.img}
          />
        ))}
      </div>
    </section>
  );
}

export default WebInfo;
