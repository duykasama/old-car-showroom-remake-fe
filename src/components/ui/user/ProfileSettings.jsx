import { useState } from "react";

function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
  });

  const handleFormDataChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="col-span-5 p-8 rounded border border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Profile Settings</h2>
        <button className="w-fit bg-red-500 py-2 px-4 rounded text-white font-semibold">
          Change password
        </button>
      </div>
      <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col gap-3 text-sm">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFormDataChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <label htmlFor="phone">Mobile number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleFormDataChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={handleFormDataChange}
            className="p-2 border rounded"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={handleFormDataChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-3 text-sm">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleFormDataChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-3 text-sm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            disabled
            className="p-2 border rounded"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button className="w-fit bg-red-500 py-2 px-4 rounded text-white font-semibold">
            Save profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
