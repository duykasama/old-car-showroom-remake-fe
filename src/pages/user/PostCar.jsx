import { useState } from "react";
import ImageUploader from "../../components/ImageUploader";

function PostCar() {
  const [formData, setFormData] = useState({
    carName: "",
    make: "",
    model: "",
    body: "",
    bodyColor: "",
    interiorMaterial: "",
    interiorColor: "",
    licensePlate: "",
    transmission: "",
    seats: 1,
    mileage: "",
    engineCapacity: "",
    power: "",
    co2Emission: "",
    fuelType: "",
    firstRegistration: "",
    price: 0,
    otherInformation: "",
    postDescription: "",
  });

  const handleFormDataChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("car posted");
    console.log(formData);
  };

  return (
    <main className="flex flex-col justify-center items-center py-10 gap-20">
      <h2 className="text-4xl font-bold">Fill in information about your car</h2>
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-3 gap-8 w-4/5"
      >
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="carName">Car name</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="carName"
            id="carName"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="make">Make</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="make"
            id="make"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="model">Model</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="model"
            id="model"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="body">Body</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="body"
            id="body"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="bodyColor">Body color</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="bodyColor"
            id="bodyColor"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="interiorMaterial">Interior material</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="interiorMaterial"
            id="interiorMaterial"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="interiorColor">Interior color</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="interiorColor"
            id="interiorColor"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="licensePlate">License plate</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="licensePlate"
            id="licensePlate"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="transmission">Transmission</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="transmission"
            id="transmission"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="seats">Seats</label>
          <input
            className="p-2 border rounded"
            type="number"
            name="seats"
            min={1}
            id="seats"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="mileage">Mileage</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="mileage"
            id="mileage"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="engineCapacity">Engine capacity</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="engineCapacity"
            id="engineCapacity"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="power">Power</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="power"
            id="power"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="co2Emission">CO2 Emission</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="co2Emission"
            id="co2Emission"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="fuelType">Fuel type</label>
          <input
            className="p-2 border rounded"
            type="text"
            name="fuelType"
            id="fuelType"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="firstRegistration">First registration</label>
          <input
            className="p-2 border rounded"
            type="date"
            name="firstRegistration"
            id="firstRegistration"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold">
          <label htmlFor="price">Price</label>
          <input
            className="p-2 border rounded"
            type="number"
            min={0}
            name="price"
            id="price"
            onChange={handleFormDataChange}
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center">
          <ImageUploader />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold col-span-3">
          <label htmlFor="otherInformation">
            Other information about the car
          </label>
          <textarea
            className="p-2 border rounded"
            name="otherInformation"
            id="otherInformation"
            onChange={handleFormDataChange}
            rows={5}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold col-span-3">
          <label htmlFor="postDescription">
            Write a description about your post
          </label>
          <textarea
            className="p-2 border rounded"
            name="postDescription"
            id="postDescription"
            onChange={handleFormDataChange}
            rows={10}
          />
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <button className="py-3 px-8 rounded border bg-red-500 text-white text-lg font-semibold hover:scale-110 hover:shadow-gray-500 shadow-md transition">
            Post car
          </button>
        </div>
      </form>
    </main>
  );
}

export default PostCar;
